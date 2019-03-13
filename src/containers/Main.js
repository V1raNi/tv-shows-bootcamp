import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import PopularList from './PopularList';
import TrendingList from './TrendingList';
// import Table from '../components/Table';
import { removeError } from '../store/actions/errors';
import Homepage from '../components/Homepage';

const Main = (props) => {
  const { updateNavBarVisibility } = props;
  return(
    <div className="container">
      <Switch>
        <Route exact path="/" render={props => <Homepage switchNavBar={updateNavBarVisibility} {...props} />} />
        <Route exact path="/popular" render={props => <PopularList page="popular" switchNavBar={updateNavBarVisibility} {...props} />} />
        <Route exact path="/trending" render={props => <TrendingList page="trending" switchNavBar={updateNavBarVisibility} {...props} />} />
      </Switch>
    </div>
  )
}

export default withRouter(connect(null, { removeError })(Main));