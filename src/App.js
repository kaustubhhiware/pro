import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactGA from 'react-ga4';
import { Container, Row } from 'react-bootstrap';

import {Placard, ToggleLang} from './components/placard';
import Content from './components/content';
import {ToggleThemes} from './components/themer';
import Footer from './components/footer';

import {ThemeDefault} from './data/_themes';
import {Bio, LangDefault} from './data/bio';

ReactGA.initialize(Bio.GATrackingID);
ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search});

class App extends React.Component {
  // call the toogleThemes function first time to set things up
  componentDidMount() {
    document.documentElement.style.setProperty('--theme-index', (ThemeDefault-1).toString());
    document.documentElement.style.setProperty('--lang-index', (LangDefault-1).toString());

    ToggleThemes();
    ToggleLang();
  }

  render() {
    console.log('Easter egg 4/5 - The links light up like a bulb when you hover over them.');
    console.log('Easter egg 5/5 - You have to find that yourself. It\'s different on desktop and mobile.');
    console.log('Once you find it, email me with the title \'Easter egg 5 ?????\' at ', Bio.URLs.Email)
    /*
      You sly dog, you come to the source code, looking for the fifth easter egg ?
      I suppose you deserve to find out.
      Desktop - The scroll bar switches the text and accent color on hover.
      Mobile - The timeline moves to the left, desktop's timeline is right-aligned.
      Email me with the title "I see through your tricks, task master"
    */

    return (
      <div className="App">
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
