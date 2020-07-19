import React from 'react';
// import Header from '../Header/Header.component';
import Navigation from './Navigation';
import Main from './Main';
import './App.css';

function App() {
  return (
    <div className='app'>
    <Navigation />
    <div class='main'>
      <Main />
    </div>
  </div>
  );
}

export default App;
