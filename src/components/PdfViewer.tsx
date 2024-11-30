import React from "react";
import { Viewer, TextDirection } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import * as pdfjsLib from "pdfjs-dist";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import ar_AE from "@react-pdf-viewer/locales/lib/ar_AE.json";

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

interface PdfViewerProps {
  fileUrl: string;
  language: "en" | "ar";
}

const PdfViewer: React.FC<PdfViewerProps> = ({ fileUrl, language }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const localization = language === "ar" ? ar_AE : undefined;
  const textDirection = language === "ar" ? TextDirection.RightToLeft : undefined;

  return (
    <Viewer
      fileUrl={fileUrl}
      plugins={[defaultLayoutPluginInstance]}
      {...(language === "ar" && { localization })}
      {...(language === "ar" && { theme: { direction: textDirection } })}
    />
  );
};

export default PdfViewer;
