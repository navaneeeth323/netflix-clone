import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg'

const HeaderContainer = ({children}) => {
  return(
      <Header>
          <Header.Frame>
              <Header.Logo to={ROUTES.HOME} alt='Neflix' src={logo}/>
              <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
        </Header.Frame>
        {children}
      </Header>
  );
}

export default HeaderContainer;