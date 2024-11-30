
# PDF Viewer App

A simple React + TypeScript application to view PDF files with support for English and Arabic. This app uses the `@react-pdf-viewer` library.

## Features

- View PDF files dynamically in the browser.
- Switch between English and Arabic text directions and localization.
- Clean and responsive layout.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ryadpasha/pdf-viewer-app.git
   cd pdf-viewer-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Usage

- The application serves an example PDF file located in the `public/` directory.
- You can toggle the language between English and Arabic using the button on the top of the page.

## File Structure

```
pdf-viewer-app/
├── public/
│   ├── example.pdf      # Example PDF file
├── src/
│   ├── components/
│   │   └── PdfViewer.tsx # PDF viewer component
│   ├── App.tsx           # Main app component
│   ├── index.tsx         # React entry point
├── tsconfig.json         # TypeScript configuration
├── README.md             # Project documentation
├── package.json          # Project configuration
```

## Technologies Used

- React
- TypeScript
- @react-pdf-viewer/core
- @react-pdf-viewer/default-layout
- pdfjs-dist

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.
