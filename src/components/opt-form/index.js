import React from 'react';
import {Container, Input, Button, Text,Break} from './styles/opt-form';

const OptForm = ({children,...restProps}) => {
    return (
        <Container {...restProps}>{children}</Container>
    );
}

export default OptForm;

OptForm.Input = function OptFormInput ({children,...restProps}) {
   return <Input {...restProps}/>
}

OptForm.Button = function OptFormButton ({children,...restProps}) {
    return <Button {...restProps}>
        {children} <img src='/images/icons/chevron-right.png' alt='try now'/>
    </Button>
}

OptForm.Text = function OptFormText ({children,...restProps}) {
    return <Text {...restProps}>{children}</Text>
}

OptForm.Break = function OptFormBreak({ ...restProps }) {
    return <Break {...restProps} />;
  };