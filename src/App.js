import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home,Browse,SignIn,SignUp } from './pages';
import * as ROUTES from './constants/routes';

const App = () => {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route exact path={ROUTES.BROWSE}>
        <Browse />
      </Route>
      <Route exact path={ROUTES.SIGN_IN}>
        <SignIn />
      </Route>
      <Route exact path={ROUTES.SIGN_UP}>
        <SignUp />
      </Route>
    </Router >
  );
}

export default App;
