import React, { Component } from 'react';
import { configureStore } from '../store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Main from './Main';
import Navbar from './Navbar';

const store = configureStore();

class App extends Component {
  constructor() {
    super();
    this.state = {
      navBarVisible: false
    }
    this.changeNavbarVisibility = this.changeNavbarVisibility.bind(this);
  }

  changeNavbarVisibility(value) {
    this.setState({
      navBarVisible: value
    });
  }

  render() {
    return (
    <Provider store={store}>
    <Router>
      <div>
        <Navbar navBarVisible={this.state.navBarVisible} />
        <Main updateNavBarVisibility={this.changeNavbarVisibility} />
      </div>
    </Router>
  </Provider>
    )
  }
};

export default App;
