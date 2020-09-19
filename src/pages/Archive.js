import React from "react";
import { NavLink } from "react-router-dom";
import {
  redlineIssue1,
  redlineIssue2,
  redlineIssue3,
} from "../zines/zineVariables";
import ZinePreview from "../components/ZinePreview";

const Archive = ({ pdfWidth }) => {
  // Add additional issues to this list
  let issues = [redlineIssue1, redlineIssue2, redlineIssue3];

  let issuesDisplay = issues.map((issueInfo) => {
    let pageUrl = "/archive-issue" + issueInfo.issueNumber;
    return (
      <>
        <div>
          <NavLink to={pageUrl}>
            <ZinePreview page={issueInfo.firstPage} pdfWidth={pdfWidth} />
          </NavLink>
          <a href={issueInfo.path} download>
            No. {issueInfo.issueNumber}, {issueInfo.issueDate}
          </a>
        </div>
        <div class="archiveIssuePadding" />
      </>
    );
  });

  return <div className="archive">{issuesDisplay}</div>;
};

export default Archive;
