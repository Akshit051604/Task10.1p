import React from 'react';
import { Form, Input, Button, Container } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom'; 

const Subscribe = () => {
  const navigate = useNavigate();  
  const handleSubscribe = () => {
    navigate('/subscribe'); 
  };

  return (
    <Container textAlign='center' style={{ marginTop: '50px' }}>
      <h3>SIGN UP TO KNOW MORE</h3>
      <Form>
        <Form.Field inline>
          <Input placeholder='Enter your email' />
          <Button primary onClick={handleSubscribe}>Subscribe</Button>
        </Form.Field>
      </Form>
    </Container>
  );
};

export default Subscribe;
