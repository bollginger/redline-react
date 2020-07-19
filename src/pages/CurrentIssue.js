import React from 'react';
import ZineViewer from '../components/ZineViewer';
import redline2 from "./redline_issue_2_2020.pdf";


const CurrentIssue = () => (
  <div class='zineviewer'>
    <h1>Issue 2 (July 2020)</h1>
    <ZineViewer pdf={redline2}/>
    <a href='./redline_issue_2_2020.pdf' download>Prefer paper? Us too. Download here.</a>
  </div>
);


export default CurrentIssue;