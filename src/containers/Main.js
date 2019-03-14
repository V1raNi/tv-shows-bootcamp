import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


import TableHeader from '../components/TableHeader';
import { removeError } from '../store/actions/errors';
import Homepage from '../components/Homepage';

const Main = (props) => {
  const { updateVisibility } = props;
  return(
    <div className="container">
      <Switch>
        <Route exact path="/" render={props => <Homepage switchVisibility={updateVisibility} {...props} />} />
        <Route exact path="/popular" render={props => <TableHeader page="popular" switchVisibility={updateVisibility} {...props} />} />
        <Route exact path="/trending" render={props => <TableHeader page="trending" switchVisibility={updateVisibility} {...props} />} />
      </Switch>
    </div>
  )
}

export default withRouter(connect(null, { removeError })(Main));