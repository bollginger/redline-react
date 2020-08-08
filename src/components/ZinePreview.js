import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import '../styles/style.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
 
function ZinePreview(props) {
  let { pdf, pdfWidth } = props;
  
  // because pdfs are rendered without regard to css, below optimizes for mobile
  pdfWidth = (pdfWidth <= 480) ? pdfWidth:pdfWidth*0.4;

  return (
    <div class='zine-preview'>
      <Document
        file= {pdf}
        options={{ workerSrc: "/pdf.worker.js" }}
      >
        <Page width={pdfWidth} pageNumber={1}></Page>
      </Document>
    </div>
  );
}

export default ZinePreview;