import React from 'react';
import {Footer} from '../components';

const FooterContainer = () => {
  return (

    <Footer>
      <Footer.Title></Footer.Title>
      <Footer.Break/>
      <Footer.Row>
          <Footer.Column>
              <Footer.Link href='#'>Investor relations</Footer.Link>
              <Footer.Link href='#'>FAQ</Footer.Link>
              <Footer.Link href='#'>Corporate information</Footer.Link>
              <Footer.Link href='#'>Speed Test</Footer.Link>
          </Footer.Column>
          <Footer.Column>
              <Footer.Link href='#'>Help center</Footer.Link>
              <Footer.Link href='#'>Legal notices</Footer.Link>
              <Footer.Link href='#'>Cookie preferences</Footer.Link>
              <Footer.Link href='#'>Jobs</Footer.Link>
          </Footer.Column> 
          <Footer.Column>
              <Footer.Link href='#'>Account</Footer.Link>
              <Footer.Link href='#'>Ways to watch</Footer.Link>
              <Footer.Link href='#'>Corporate information</Footer.Link>
              <Footer.Link href='#'>Netflix originals</Footer.Link>
            </Footer.Column> 
          <Footer.Column>
              <Footer.Link href='#'>Terms of use</Footer.Link>
              <Footer.Link href='#'>Contact us</Footer.Link>
              <Footer.Link href='#'>Media center</Footer.Link>
          </Footer.Column>
      </Footer.Row>
      <Footer.Break/>
      <Footer.Text>Netflix India</Footer.Text>
  </Footer>

  );
  
}

export default FooterContainer;