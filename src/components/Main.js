import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Table from '../containers/Table';
import Homepage from './Homepage';

const Main = ({ updateVisibility }) => {
  return (
    <div className="container-main">
      <Switch>
        <Route
          exact
          path="/"
          render={props => <Homepage switchVisibility={updateVisibility} {...props} />}
        />
        <Route
          exact
          path="/popular"
          render={props => (
            <div className="container">
              <Table page="popular" switchVisibility={updateVisibility} {...props} />
            </div>
          )}
        />
        <Route
          exact
          path="/trending"
          render={props => (
            <div className="container">
              <Table page="trending" switchVisibility={updateVisibility} {...props} />
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

Main.propTypes = {
  updateVisibility: PropTypes.func.isRequired,
};

export default withRouter(Main);
