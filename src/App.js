import React from 'react';
import preloadergif from './images/quote.gif';
import { CustomPreloader } from 'react-preloaders';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactGA from 'react-ga';
import { Container, Row } from 'react-bootstrap';

import {Placard, ToggleLang} from './components/placard';
import Content from './components/content';
import {ToggleThemes} from './components/themer';
import Footer from './components/footer';

import {ThemeDefault} from './data/_themes';
import {Bio, LangDefault} from './data/bio';

// ReactGA.initialize(Bio.GATrackingID);
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends React.Component {
  // call the toogleThemes function first time to set things up
  componentDidMount() {
    document.documentElement.style.setProperty('--theme-index', (ThemeDefault-1).toString());
    document.documentElement.style.setProperty('--lang-index', (LangDefault-1).toString());

    ToggleThemes();
    ToggleLang();
  }

  render() {
    return (
      <div className="App">
        {/* <CustomPreloader time={3000}> */}
        <CustomPreloader time={0}>
          <img src={preloadergif} alt="" className="preloader" />
        </CustomPreloader>

        <Container fluid className="contain">
          <Row id="superset">
              <Placard/>
              <Content/>
          </Row>
          <Footer/>
        </Container>
      </div>
    );
  }
}

export default App;
