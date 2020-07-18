import React from 'react';
// import LandingPage from '../LandingPage/LandingPage.component';
// import ZineViewer from '../ZineViewer/ZineViewer.component';
// import Header from '../Header/Header.component';
import Navigation from './Navigation';
import Main from './Main';
import './App.css';

function App() {
  return (
    <div className='app'>
    <img src='redline_red.png' height = '200' width = '250'></img>
    <Navigation />
    <Main />
  </div>
  );
}

export default App;
