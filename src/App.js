import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home,Browse,SignIn,SignUp } from './pages';
import { IsUserRedirect, ProtectedRoute  } from './helpers/routes';
import { useAuthListener } from './hooks';
import * as ROUTES from './constants/routes';

const App = () => {
  const { user } = useAuthListener();
  console.log(user);
  
  return (
    <Router>
    <Switch>
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
        <SignIn />
      </IsUserRedirect>
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
        <SignUp />
      </IsUserRedirect>
      <ProtectedRoute user={user} path={ROUTES.BROWSE}>
        <Browse />
      </ProtectedRoute>
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
        <Home />
      </IsUserRedirect>
    </Switch>
  </Router>
  );
}

export default App;
