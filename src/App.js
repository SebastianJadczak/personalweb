import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './styles/App.css';

import Footer from './Routers/Footer'
import Main from './Routers/Main'
import Navigation from './Routers/Navigation'
import Header from './Routers/Header'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navigation">
            <Navigation />
          </nav>
          <header>
            <Header />
          </header>
          <main>
            <section className="main">
              <Main />
            </section>
            <footer>
              <Footer />
            </footer>
          </main>



        </div>

      </Router>
    )
  }
}

export default App;
