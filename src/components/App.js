import React from 'react';
// import Header from '../Header/Header.component';
import Navigation from './Navigation';
import Main from './Main';
import '../styles/style.css'

function App() {
  return (
  <>
  <div class='navigation'>
    <Navigation />
  </div>
  <div class='main'>
    <Main />
  </div>
  </>
  );
}

export default App;
