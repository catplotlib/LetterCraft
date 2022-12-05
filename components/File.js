import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import styles from "../styles/file.module.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const File = ({ pdfText, setPdfText }) => {
  const [pdfFile, setPdfFile] = useState(null);

  const handlePdfChange = (e) => {
    setPdfFile(e.target.files[0]);
  };
  return (
    // if pdfFile the a different className
    <div className={styles.container}>
      <div className={pdfFile ? styles.pdfFile : styles.uploadBox}>
        <input type="file" accept="application/pdf" required onChange={handlePdfChange} />
        {pdfFile && (
          <Document
            file={pdfFile}
            onLoadSuccess={(pdf) => {
              let textContent = "";
              for (let i = 1; i <= pdf.numPages; i++) {
                pdf.getPage(i).then((page) => {
                  page.getTextContent().then((text) => {
                    textContent += text.items.map((s) => s.str).join(" ");
                    setPdfText(textContent);
                    //   navigator.clipboard.writeText(textContent);
                  });
                });
              }
            }}
          >
            <Page pageNumber={1} />
          </Document>
        )}
      </div>
      {pdfFile && <p>Resume uploaded!</p>}
    </div>
  );
};

export default File;
