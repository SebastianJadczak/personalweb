import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './styles/App.css';
import Footer from './Routers/Footer'
import Main from './Routers/Main'
import Navigation from './Routers/Navigation'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navigation">
            <Navigation />
          </nav>
          <main>
            <section className="main">
              <Main />
            </section>
          </main>
          <footer>
            <Footer />
          </footer>




        </div>

      </Router>
    )
  }
}

export default App;
