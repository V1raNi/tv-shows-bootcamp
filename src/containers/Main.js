import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import PopularList from './PopularList';
import TrendingList from './TrendingList';
import { removeError } from '../store/actions/errors';
import Homepage from '../components/Homepage';

const Main = () => {
  return(
    <div className="container">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/popular" render={props => <PopularList {...props} />} />
        <Route exact path="/trending" render={props => <TrendingList {...props} />} />
      </Switch>
    </div>
  )
}

export default withRouter(connect(null, { removeError })(Main));