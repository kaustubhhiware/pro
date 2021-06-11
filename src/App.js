import React from 'react';
import preloadergif from './images/quote.gif';
import { CustomPreloader } from 'react-preloaders';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row } from 'react-bootstrap';

import Placard from './components/placard';
import Content from './components/content';

import {ThemeDefault, Themes} from './data/_themes';

function App() {
  return (
    <div className="App">
    {/* <CustomPreloader time={3000}> */}
    <CustomPreloader time={0}>
      <img src={preloadergif} alt="" className="preloader" />
    </CustomPreloader>
    
    <header className="App-header">
      {/* ToDo: CHANGE TO componentDIDmount or something */}
    <Row id="superset" className={Themes[ThemeDefault].Name}>
        <Placard/>
        <Content/>
    </Row>
    </header>
    
    </div>
    );
  }
  
  export default App;
  