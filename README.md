# PDF to Image Converter

This project allows you to convert PDF files into JPEG images in the browser and upload them to a Node.js/Express server. Each upload batch is stored in a datetime-stamped folder for easy organization. The server only accepts JPEG images and supports uploads from any origin (CORS enabled).

## Features
- Convert PDF pages to JPEG images in the browser
- Upload multiple images at once
- Each upload batch is saved in a unique, timestamped folder
- CORS enabled: upload from any frontend

## Getting Started

### Prerequisites
- Node.js (v16 or newer recommended)
- npm

### 1. Install dependencies

```
cd server
npm install
```

### 2. Start the server

```
npm start
```

The server will run on port 1234 by default.

### 3. Frontend setup
- Make sure your frontend is configured to use the `/upload` endpoint (e.g., `http://localhost:1234/upload`).
- If using the included React client, install dependencies and start the dev server:

```
cd client
npm install
npm start
```

### 4. Using the app
- Select a PDF file in the frontend.
- The app will convert each page to a JPEG image.
- Click upload to send the images to the server.
- Uploaded images are saved in `server/uploads/<timestamped-folder>/`.

## Development Scripts

### Server
- `npm start` — Start the Express server
- `npm run dev` — Start the server with auto-reload using nodemon

### Client
- `npm run dev` — Start the React/Vite development server
- `npm run build` — Build the frontend for production
- `npm run preview` — Preview the production build locally

You can run these commands in the respective `server` or `client` directories.

## Notes
- Only JPEG images are accepted by the server.
- Each upload batch is grouped in its own folder for easy management.
- CORS is enabled for all origins by default.

## License
MIT
