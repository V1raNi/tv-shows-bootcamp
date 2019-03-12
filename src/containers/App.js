import React from 'react';
import { configureStore } from '../store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Main from './Main';
// import Navbar from './Navbar';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        {/* <Navbar /> */}
        <Main />
      </div>
    </Router>
  </Provider>
);

export default App;
