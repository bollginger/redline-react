import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import '../styles/style.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
 
function ZineViewer(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show first page
  const fullScreenToggle = useFullScreenHandle();

  function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
      setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  let { pdf, pdfWidth } = props;
  let pageWidth = pdfWidth;

  // because pdfs are rendered without regard to css, below optimizes for mobile
  // also takes into account that page 1 has half the width of later pages
  pdfWidth = (pdfWidth <= 480) ? pdfWidth*0.9:pdfWidth*0.6;
  pdfWidth = (fullScreenToggle.active === true) ? pageWidth:pdfWidth;
  pdfWidth = (pageNumber === 1) ? pdfWidth*0.5:pdfWidth;

  return (
    <div class='zineviewer'>
      <button type='button' onClick={fullScreenToggle.enter}>
        Enter fullscreen
      </button>
      <FullScreen handle={fullScreenToggle}>
        <p>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
        <button type='button' onClick={fullScreenToggle.exit}>
          Exit fullscreen
        </button>
        <Document
          file= {pdf}
          options={{ workerSrc: "/pdf.worker.js" }}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} width={pdfWidth} ></Page>
        </Document>
      </FullScreen>
    </div>
  );
}

export default ZineViewer;