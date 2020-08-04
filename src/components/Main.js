import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import DisplayIssue from '../pages/DisplayIssue';
import Shop from '../pages/Shop';
import Archive from '../pages/Archive';
import Submissions from '../pages/Submit';
import Subscribe from '../pages/Subscribe';
import SubmitGuidelines from '../pages/SubmitGuidelines';
import { redlineIssue1, redlineIssue2 } from '../zines/zineVariables';


const Main = () => (
    <>
      <NavLink exact to='/'>
            <div>
                <img src='redline_red.png' alt='Redline Logo' class='logo-mobile-only'></img>
            </div>
      </NavLink>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/contact' component={Contact}></Route>
        <Route exact path='/currentissue' render={(props) => 
            <DisplayIssue {...props} issueNumber={redlineIssue2.issueNumber}
                                    issueDate={redlineIssue2.issueDate}
                                    pdf={redlineIssue2.pdf}
                                    path={redlineIssue2.path}
                                    download={redlineIssue2.download}
            />}>
        </Route>
        <Route exact path='/shop' component={Shop}></Route>
        <Route exact path='/guidelines' component={SubmitGuidelines}></Route>
        <Route exact path='/submit' component={Submissions}></Route>
        <Route exact path='/subscribe' component={Subscribe}></Route>
        <Route exact path='/archive' component={Archive}></Route>
        <Route exact path='/archive-issue1' render={(props) => 
            <DisplayIssue {...props} issueNumber={redlineIssue1.issueNumber}
                                    issueDate={redlineIssue1.issueDate}
                                    pdf={redlineIssue1.pdf}
                                    path={redlineIssue1.path}
                                    download={redlineIssue1.download}
            />}>
        </Route>
        <Route exact path='/archive-issue2' render={(props) => 
            <DisplayIssue {...props} issueNumber={redlineIssue2.issueNumber}
                                    issueDate={redlineIssue2.issueDate}
                                    pdf={redlineIssue2.pdf}
                                    path={redlineIssue2.path}
                                    download={redlineIssue2.download}
            />}>
        </Route>
      </Switch>
    </>
  );


export default Main;