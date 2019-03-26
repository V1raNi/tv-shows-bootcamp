import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


import Table from './Table';
import { removeError } from '../store/actions/errors';
import Homepage from '../components/Homepage';

const Main = (props) => {
  const { updateVisibility } = props;
  return(
    <div className="container-main">
      <Switch>
        <Route exact path="/" render={props => <Homepage switchVisibility={updateVisibility} {...props} />} />
        <Route exact path="/popular" render={props =>
          <div className="container">
            <Table page="popular" switchVisibility={updateVisibility} {...props} />
          </div>}
        />
        <Route exact path="/trending" render={props =>
          <div className="container">
            <Table page="trending" switchVisibility={updateVisibility} {...props} />
          </div>}
        />
      </Switch>
    </div>
  )
}

export default withRouter(connect(null, { removeError })(Main));