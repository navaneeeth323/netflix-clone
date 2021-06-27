import React, { useState, useEffect } from 'react';
import HeaderContainer  from '../containers/header';
import FooterContainer from '../containers/footer';
import {Form} from '../components';

const SignIn = () => {
  const [emailAddress,setEmailAddress] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState(false);
  //my code
  const [isValid,setIsValid] = useState(false);
  const [emailIsValid,setEmailIsValid] = useState(false);
  const [passwordIsValid,setPasswordIsValid] = useState(false);

  const emailChangeHandler = (event) => {
     setEmailAddress(event.target.value);

     if(event.target.value.includes('@')) {
       setEmailIsValid(true);
     }

     else {
       setEmailIsValid(false);
     }
  }

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);

    if(event.target.value.length>3) {
      setPasswordIsValid(true);
    }

    else {
      setPasswordIsValid(false);
    }
  }

  useEffect(() => {
    const timer = setTimeout(()=>{
      setIsValid(emailIsValid && passwordIsValid);
    },500)
    return () => {
      clearTimeout(timer);
    }
  }, [emailAddress,password,emailIsValid,passwordIsValid])

  // till here
  return(
      <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          <Form.Base>

            <Form.Input 
            type="email" 
            placeholder="Email Address"
            value={emailAddress}
            onChange={emailChangeHandler}
            />
            {!emailIsValid && <Form.Error>Please enter a valid email address</Form.Error>}
            
            <Form.Input type="password" 
            placeholder="Password"
            value={password}
            onChange={passwordChangeHandler}
            />
            {!passwordIsValid && <Form.Error>Your password must contain between 4 and 60 characters.</Form.Error>}

            <Form.Submit type="submit" disabled={!isValid}>Sign In</Form.Submit>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer/>
      </>
  );
}

export default SignIn;