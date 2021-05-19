import React from 'react';
import logo from './logo.svg';
import preloadergif from './images/quote.gif';
import { CustomPreloader } from 'react-preloaders';
import './App.css';
import IntroPage from './components/Intro';

function App() {
  return (
    <div className="App">
      {/* <CustomPreloader time={3450}> */}
      <CustomPreloader time={0}>
        <img src={preloadergif} alt="" className="preloader" />
      </CustomPreloader>
      
      {/* Remove header once site is completed */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Work in progress. Check back on May 23, 2021.
        </p>
      </header>

      <IntroPage />
    </div>
  );
}

export default App;
