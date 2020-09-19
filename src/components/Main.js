import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import DisplayIssue from "../pages/DisplayIssue";
import Shop from "../pages/Shop";
import Archive from "../pages/Archive";
import Submissions from "../pages/Submit";
import Subscribe from "../pages/Subscribe";
import SubmitGuidelines from "../pages/SubmitGuidelines";
import {
  redlineIssue1,
  redlineIssue2,
  redlineIssue3,
  redlineIssue4,
} from "../zines/zineVariables";

const Main = ({ pdfWidth }) => {
  const archiveIssues = [redlineIssue1, redlineIssue2, redlineIssue3];

  let archiveIssuesLinks = archiveIssues.map((issueInfo) => {
    let pageUrl = "/archive-issue" + issueInfo.issueNumber;
    return (
      <Route
        exact
        path={pageUrl}
        render={(props) => (
          <DisplayIssue
            {...props}
            issueNumber={issueInfo.issueNumber}
            issueDate={issueInfo.issueDate}
            pageJpg={issueInfo.firstPage}
            numPages={issueInfo.numPages}
            download={issueInfo.download}
            pdfWidth={pdfWidth}
          />
        )}
      ></Route>
    );
  });

  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Home {...props} pdfWidth={pdfWidth} />}
        ></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route
          exact
          path="/currentissue"
          render={(props) => (
            <DisplayIssue
              {...props}
              issueNumber={redlineIssue4.issueNumber}
              issueDate={redlineIssue4.issueDate}
              pageJpg={redlineIssue4.firstPage}
              numPages={redlineIssue4.numPages}
              download={redlineIssue4.download}
              pdfWidth={pdfWidth}
            />
          )}
        ></Route>
        <Route exact path="/shop" component={Shop}></Route>
        <Route exact path="/guidelines" component={SubmitGuidelines}></Route>
        <Route exact path="/submit" component={Submissions}></Route>
        <Route exact path="/subscribe" component={Subscribe}></Route>
        <Route
          exact
          path="/archive"
          render={(props) => <Archive {...props} pdfWidth={pdfWidth} />}
        ></Route>
        {archiveIssuesLinks}
      </Switch>
    </>
  );
};

export default Main;
