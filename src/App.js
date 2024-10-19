import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import HomePage from './HomePage';
import { HashRouter } from 'react-router-dom';
import InstaCloneAppDescription from './InstaCloneAppDescription';
// import {InstaCloneAppDescrop}
class App extends Component {
  render() {
    return (
        <Routes>
          <Route exact path='/' Component={HomePage}/>
          <Route path='/insta-clone' Component={InstaCloneAppDescription}/>
        </Routes>
    );
  }
}

export default App;
