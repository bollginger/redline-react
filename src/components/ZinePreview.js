import React from "react";
import "../styles/style.css";

function ZinePreview(props) {
  let { page, pdfWidth } = props;

  // because pdfs are rendered without regard to css, below optimizes for mobile
  pdfWidth = pdfWidth <= 480 ? pdfWidth * 0.9 : pdfWidth * 0.3;

  return (
    <div class="zine-preview">
      <img src={page} width={pdfWidth} alt="Zine Cover"></img>
    </div>
  );
}

export default ZinePreview;
