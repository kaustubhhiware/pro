import React from 'react';
import preloadergif from './images/quote.gif';
import { CustomPreloader } from 'react-preloaders';
import './App.css';
import { Container, Row } from 'react-bootstrap';
import Sakura from './images/sakura.jpg';
import Waves from './images/waves.jpg';

import Placard from './components/placard';
import Content from './components/content';

  let theme = 'light-theme';

// const toggleThemes = () => {
//     if (theme === 'light-theme') {
//       changeTheme('dark-theme');
//       theme = 'dark-theme';
//     } else {
//       changeTheme('light-theme');
//       theme = 'light-theme'
//     }
//   }

function App() {
  return (
    <div className="App">
    {/* <CustomPreloader time={3000}> */}
    <CustomPreloader time={0}>
      <img src={preloadergif} alt="" className="preloader" />
    </CustomPreloader>
    
    <header className="App-header">
    <Container id="container" className="light-theme"  style={{
      backgroundImage: `url(${Sakura})`,
      }}>
      <Row>
        <Placard/>
        <Content/>
      </Row>
    </Container>
    </header>
    
    </div>
    );
  }
  
  export default App;
  