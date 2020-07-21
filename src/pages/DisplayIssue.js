import React from 'react';
import ZineViewer from '../components/ZineViewer';


function DisplayIssue({issueNumber, issueDate, pdf, path, download}) {
  return (
    <div class='zineviewer'>
      <h1>Issue {issueNumber} ({issueDate})</h1>
      <ZineViewer pdf={pdf}/>
      <a href={download} download>Prefer paper? Us too. Download here.</a>
    </div>
  );
};


export default DisplayIssue;