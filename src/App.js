import React from 'react';
import preloadergif from './images/quote.gif';
import { CustomPreloader } from 'react-preloaders';
import './App.css';
import { Container, Row } from 'react-bootstrap';

import Placard from './components/placard';
import Content from './components/content';


function App() {
  return (
    <div className="App">
    {/* <CustomPreloader time={3000}> */}
    <CustomPreloader time={0}>
      <img src={preloadergif} alt="" className="preloader" />
    </CustomPreloader>
    
    <header className="App-header">
    <Container className="container">
      <Row>
        <Placard />
        <Content />
      </Row>
    </Container>
    </header>
    
    </div>
    );
  }
  
  export default App;
  