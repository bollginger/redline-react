import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import '../styles/style.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
 
function ZinePreview(props) {
  const { pdf } = props;

  return (
    <div class='zine-preview'>
      <Document
        file= {pdf}
        options={{ workerSrc: "/pdf.worker.js" }}
      >
        <Page pageNumber={1}></Page>
      </Document>
    </div>
  );
}

export default ZinePreview;