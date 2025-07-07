const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();

// Enable CORS for all origins
app.use(cors());

// Parse URL-encoded bodies for form data
app.use(express.urlencoded({ extended: true }));

// Create uploads directory if it doesn't exist
const uploadsDir = 'uploads';

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Configure multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Use a temporary directory first, we'll move files later
    const tempDir = path.join(uploadsDir, 'temp');

    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }

    cb(null, tempDir);
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

    // Get the upload folder name from the request body
    const uploadFolder = req.body.uploadFolder || new Date().toISOString().replace(/[:.]/g, '-');
    const finalDir = path.join(uploadsDir, uploadFolder);

    // Create the final directory if it doesn't exist
    if (!fs.existsSync(finalDir)) {
      fs.mkdirSync(finalDir, { recursive: true });
    }

    // Move files from temp directory to final directory
    const fileInfo = req.files.map(file => {
      const newPath = path.join(finalDir, file.filename);

      fs.renameSync(file.path, newPath);

      return {
        originalName: file.originalname,
        filename: file.filename,
        size: file.size,
        path: newPath
      };
    });

    res.json({
      message: 'Files uploaded successfully',
      uploadFolder,
      files: fileInfo
    });

  } catch (error) {
    console.error('Upload error:', error);
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