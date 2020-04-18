import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from './components/Wrapper';
import Nav from './components/Nav';
import Portfolio from './pages/Portfolio';
import Profile from './pages/Profile';
import Contact from './pages/Contact'
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Wrapper>
            <Nav />
            <Route exact path="/index" component={Profile} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </Wrapper>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
