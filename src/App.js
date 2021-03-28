import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Register from './components/Register'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/react" component={Home} />
        <Route path="/skills" component={Skills} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
