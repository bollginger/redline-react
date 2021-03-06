import React, { useState } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import "../styles/style.css";

function ZineViewer(props) {
  let { pageJpg, issueNumber, numPages, pdfWidth } = props;
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show first page
  const [pageImageSource, setPageImageSource] = useState(pageJpg);
  console.log(pageImageSource);
  const fullScreenToggle = useFullScreenHandle();

  function previousPage() {
    let prevNumLength = pageNumber.toString().length;
    let pageNumString = (pageNumber - 1).toString();
    let pageTemp =
      pageImageSource.slice(0, pageImageSource.length - (prevNumLength + 4)) +
      pageNumString +
      ".jpg";
    setPageNumber((prevPageNumber) => prevPageNumber - 1);
    setPageImageSource(pageTemp);
  }

  function nextPage() {
    let prevNumLength = pageNumber.toString().length;
    let pageNumString = (pageNumber + 1).toString();
    let pageTemp =
      pageImageSource.slice(0, pageImageSource.length - (prevNumLength + 4)) +
      pageNumString +
      ".jpg";
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
    setPageImageSource(pageTemp);
  }

  let pageWidth = pdfWidth;

  // because pdfs are rendered without regard to css, below optimizes for mobile
  // also takes into account that page 1 has half the width of later pages
  pdfWidth = pdfWidth <= 480 ? pdfWidth * 0.9 : pdfWidth * 0.6;
  pdfWidth = fullScreenToggle.active === true ? pageWidth * 0.8 : pdfWidth;
  pdfWidth = pageNumber === 1 ? pdfWidth * 0.5 : pdfWidth;

  // setting visibility of "Exit fullscreen" button
  let buttonVisibility =
    fullScreenToggle.active === true ? "inline-block" : "none";

  // Creating array of buttons for jumping pages
  let pageNumberButtons = [];

  const handleImageClick = () => {
    if (fullScreenToggle.active === false) {
      fullScreenToggle.enter();
    } else if (pageNumber < numPages) {
      nextPage();
    }
  };

  for (let page = 1; page <= numPages; page++) {
    pageNumberButtons.push(
      <button
        disabled={pageNumber === { page }}
        className="pageButton"
        onClick={() => {
          let prevNumLength = pageNumber.toString().length;
          let pageNumString = page.toString();
          let pageTemp =
            pageImageSource.slice(
              0,
              pageImageSource.length - (prevNumLength + 4)
            ) +
            pageNumString +
            ".jpg";
          setPageNumber(page);
          setPageImageSource(pageTemp);
          console.log(pageTemp);
        }}
        style={{ display: buttonVisibility }}
      >
        {page}
      </button>
    );
  }

  console.log(pageImageSource);
  return (
    <div className="zineviewer">
      <button
        type="button"
        className="mainButton"
        onClick={fullScreenToggle.enter}
      >
        Enter fullscreen
      </button>
      <FullScreen handle={fullScreenToggle}>
        <img
          className="zineImage"
          src={process.env.PUBLIC_URL + pageImageSource}
          width={pdfWidth}
          onClick={handleImageClick}
          alt={"Zine viewer: issue " + issueNumber}
        ></img>
        <p>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <button
          type="button"
          className="mainButton"
          disabled={pageNumber <= 1}
          onClick={previousPage}
        >
          Previous
        </button>
        <button
          type="button"
          className="mainButton"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
        <button
          type="button"
          className="mainButton"
          onClick={fullScreenToggle.exit}
          style={{ display: buttonVisibility }}
        >
          Exit fullscreen
        </button>
        <span style={{ display: buttonVisibility }}>Go to page: </span>
        {pageNumberButtons}
      </FullScreen>
    </div>
  );
}

export default ZineViewer;
