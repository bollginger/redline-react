import React from "react";
import ZineViewer from "../components/ZineViewer";

function DisplayIssue({
  issueNumber,
  issueDate,
  pageJpg,
  numPages,
  download,
  pdfWidth,
}) {
  return (
    <div class="zineviewer">
      <h1>
        Issue {issueNumber} ({issueDate})
      </h1>
      <ZineViewer
        pageJpg={pageJpg}
        issueNumber={issueNumber}
        numPages={numPages}
        pdfWidth={pdfWidth}
      />
      <a href={download} download>
        Prefer paper? Us too. Download here.
      </a>
    </div>
  );
}

export default DisplayIssue;
