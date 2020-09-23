import React from "react";
import { NavLink } from "react-router-dom";
import {
  redlineIssue1,
  redlineIssue2,
  redlineIssue3,
  redlineIssue4,
} from "../images/zines/zineVariables";

const Archive = () => {
  // Add additional issues to this list
  let issues = [redlineIssue1, redlineIssue2, redlineIssue3, redlineIssue4];

  let issuesDisplay = issues.map((issueInfo) => {
    let pageUrl = "/issue" + issueInfo.issueNumber;
    return (
      <>
        <div className="zine-container">
          <NavLink to={pageUrl}>
            <img
              src={process.env.PUBLIC_URL + issueInfo.firstPage}
              className="zine-img"
              alt="Zine Cover"
            ></img>
          </NavLink>
          <a href={issueInfo.path} download>
            No. {issueInfo.issueNumber}, {issueInfo.issueDate}
          </a>
        </div>
      </>
    );
  });

  return <div className="archive">{issuesDisplay}</div>;
};

export default Archive;
