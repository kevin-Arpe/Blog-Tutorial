import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch, useParams } from 'react-router-dom';
import './App.css';
import Nav from './components/nav'
import Header from './components/header'
import Container from './components/container'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Nav />
          <Header />
          <Container />
        </div>
      </Router>
    );
  }
}

export default App;
