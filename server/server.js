const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();

// Enable CORS for all origins
app.use(cors());

// Create uploads directory if it doesn't exist
const uploadsDir = 'uploads';
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Configure multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Create a datetime-stamped folder for each upload session
    if (!req.uploadSubdir) {
      const now = new Date();
      const folderName = now.toISOString().replace(/[:.]/g, '-');
      req.uploadSubdir = path.join(uploadsDir, folderName);
      if (!fs.existsSync(req.uploadSubdir)) {
        fs.mkdirSync(req.uploadSubdir, { recursive: true });
      }
    }
    cb(null, req.uploadSubdir);
  },
  filename: (req, file, cb) => {
    // Generate unique filename with timestamp
    const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueName + path.extname(file.originalname));
  }
});

// File filter to accept only JPEGs
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/jpg'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Only JPEG files are allowed'), false);
  }
};

const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit per file
  }
});

// Upload endpoint
app.post('/upload', upload.array('images', 100), (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'No files uploaded' });
    }

    const fileInfo = req.files.map(file => ({
      originalName: file.originalname,
      filename: file.filename,
      size: file.size,
      path: file.path
    }));

    res.json({
      message: 'Files uploaded successfully',
      folder: req.uploadSubdir,
      files: fileInfo
    });
  } catch (error) {
    res.status(500).json({ error: 'Upload failed' });
  }
});

// Error handling middleware
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'File too large' });
    }
    if (error.code === 'LIMIT_FILE_COUNT') {
      return res.status(400).json({ error: 'Too many files' });
    }
  }
  res.status(400).json({ error: error.message });
});

const PORT = process.env.PORT || 1234;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;