import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';


const SignUp = () => {
  const history = useHistory();
  const {firebase} = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [fnameIsValid, setFnameIsValid] = useState(false);

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

  const fnameChangeHandler = (event) => {
    setFirstName(event.target.value);

    if (event.target.value.length > 0) {
      setFnameIsValid(true);
    }

    else {
      setFnameIsValid(false);
    }
  }


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsValid(emailIsValid && passwordIsValid && fnameIsValid);
    }, 500)
    return () => {
      clearTimeout(timer);
    }
  }, [emailAddress, password, emailIsValid, passwordIsValid, fnameIsValid]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    firebase
    .auth()
    .createUserWithEmailAndPassword(emailAddress,password)
    .then((result)=>{
      result.user
      .updateProfile({
        displayName:firstName,
        photoURL:Math.floor(Math.random()*5)+1
      })
      .then(()=>{
        history.push(ROUTES.BROWSE);
      })
    })
    .catch((error)=>{
      setFirstName('');
      setEmailAddress('');
      setPassword('');
      setError(error.message);
    })

  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          <Form.Base onSubmit={submitFormHandler} method="POST">
            <Form.Input
              type="text"
              value={firstName}
              placeholder="First Name"
              onChange={fnameChangeHandler}
            />
            {!fnameIsValid && <Form.Error>Please enter a first name</Form.Error>}
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
            
            <Form.Submit type="submit" disabled={!isValid}>Sign up</Form.Submit>

            <Form.Text>
            Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>

          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer/>
    </>
  );



}

export default SignUp;