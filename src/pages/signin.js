import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {FirebaseContext} from '../context/firebase';
import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

const SignIn = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [error, setError] = useState('');

  const emailChangeHandler = (event) => {
    setEmailAddress(event.target.value);

    if (event.target.value.includes('@')) {
      setEmailIsValid(true);
    }

    else {
      setEmailIsValid(false);
    }
  }

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);

    if (event.target.value.length > 3) {
      setPasswordIsValid(true);
    }

    else {
      setPasswordIsValid(false);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsValid(emailIsValid && passwordIsValid);
    }, 500)
    return () => {
      clearTimeout(timer);
    }
  }, [emailAddress, password, emailIsValid, passwordIsValid])

  const submitFormHandler = (event) => {
    event.preventDefault();

    //firebase code

    firebase
    .auth()
    .signInWithEmailAndPassword(emailAddress,password)
    .then(()=> {
      history.push(ROUTES.BROWSE);
    })
    .catch((error)=>{
      setEmailAddress('');
      setPassword('');
      setError(error.message);
    })
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          <Form.Base onSubmit={submitFormHandler}>
           {error && <Form.ErrorMessage>{error}</Form.ErrorMessage>}
            <Form.Input
              type="email"
              placeholder="Email Address"
              value={emailAddress}
              onChange={emailChangeHandler}
            />
            {!emailIsValid && <Form.Error>Please enter a valid email address</Form.Error>}

            <Form.Input 
              type="password"
              placeholder="Password"
              value={password}
              onChange={passwordChangeHandler}
            />
            {!passwordIsValid && <Form.Error>Your password must contain between 4 and 60 characters.</Form.Error>}

            <Form.Submit type="submit" disabled={!isValid}>Sign In</Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}

export default SignIn;