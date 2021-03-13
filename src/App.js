import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import Container  from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "Fabio Santiago Luiz",
      headerLinks: [
        { title: "Home", path: '/' },
        { title: "About", path: '/about' },
        { title: "Contact", path: '/contact' }
      ],
      home: {
        title: 'Have Courage and Be Kind',
        subTitle: 'Projects that make a difference',
        smallTitle: 'Checkout my projects below'
      },
      about: {
        title: 'About Me',

      },
      contact: {
        title: 'Get in Touch',
      }
    }
  }
  render() {
    return (
      <Router>
        <Container className="p=0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Fabio Luiz</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" 
            exact 
            render={() => 
            <HomePage title={this.state.home.title} 
                      subTitle={this.state.home.subTitle} 
                      smallTitle={this.state.home.smallTitle} 
            />} 
          />

          <Route path="/about" 
            exact 
            render={() => 
            <AboutPage title={this.state.about.title} 
            />} 
          />

          <Route path="/contact" 
            exact 
            render={() => 
            <ContactPage title={this.state.contact.title} 
            />} 
          />

          <Footer />
        </Container>
      </Router>
      );
  } 
}

export default App;
