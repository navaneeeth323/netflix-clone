import React from 'react';
import { OptForm } from '../components';
import { Feature } from '../components';
import HeaderContainer from '../containers/header';
import JumbotronContainer from '../containers/jumbotron';
import FooterContainer from '../containers/footer';
import FaqsContainer from '../containers/faqs';

const Home = () => {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>
                        Unlimited films, TV shows, and more.
                    </Feature.Title>
                    <Feature.Subtitle>
                        Watch anywhere. Cancel anytime.
                    </Feature.Subtitle>

                    <OptForm>
                    <OptForm.Text>Ready to watch? Enter your email to create or restart
                        your membership.
                    </OptForm.Text>
                    <OptForm.Break/>
                    <OptForm.Input placeholder='Email Address' />
                    <OptForm.Button>Get Started</OptForm.Button>
                </OptForm>
                
                </Feature>
                
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}

export default Home;