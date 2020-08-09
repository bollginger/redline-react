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
      console.log("Document Loaded");
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
  pdfWidth = (fullScreenToggle.active === true) ? pageWidth*0.8:pdfWidth;
  pdfWidth = (pageNumber === 1) ? pdfWidth*0.5:pdfWidth;

  // setting visibility of "Exit fullscreen" button
  let buttonVisibility = (fullScreenToggle.active === true) ? 'inline-block':'none';

  // Creating array of buttons for jumping pages
  let pageNumberButtons = [];

  for (let page = 1; page <= numPages; page++) {
    pageNumberButtons.push(
      <button
        disabled={pageNumber === {page}}
        className='pageButton'
        onClick={() => setPageNumber(page)}
        style={{display: buttonVisibility}}
      >
        {page}
      </button>
    )
  }

  return (
    <div className='zineviewer'>
      <button type='button' className='mainButton' onClick={fullScreenToggle.enter}>
        Enter fullscreen
      </button>
      <FullScreen handle={fullScreenToggle}>
        <p>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <button type="button" className='mainButton' disabled={pageNumber <= 1} onClick={previousPage}>
          Previous
        </button>
        <button
          type="button"
          className='mainButton'
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
        <button 
          type='button' 
          className='mainButton'
          onClick={fullScreenToggle.exit} 
          style={{display: buttonVisibility}}
        >
          Exit fullscreen
        </button>
        <span style={{display: buttonVisibility}}>Go to page: </span>
        {pageNumberButtons}
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