import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import configureStore from '../store';
import Main from '../components/Main';
import Navbar from '../components/Navbar';

const store = configureStore();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elementVisible: false,
    };
  }

  changeVisibility = value => {
    this.setState({
      elementVisible: value,
    });
  };

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="app">
            <Navbar navBarVisible={this.state.elementVisible} />
            <Main updateVisibility={this.changeVisibility} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
