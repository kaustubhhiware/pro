import React from 'react';
import preloadergif from './images/quote.gif';
import { CustomPreloader } from 'react-preloaders';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row } from 'react-bootstrap';
import Sakura from './images/sakura.jpg';
import Waves from './images/Waves.jpg';

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
    <Row id="superset" className="light-theme" fluid style={{
      backgroundImage: `url(${Sakura})`,
      }}>
        <Placard/>
        <Content/>
    </Row>
    </header>
    
    </div>
    );
  }
  
  export default App;
  