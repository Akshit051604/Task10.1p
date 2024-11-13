import React, { useState } from 'react';
import { Form, Input, Button, Container } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = async () => {
    if (!email) {
      alert("Please enter a valid email.");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          subject: 'Subscription Confirmation',
          message: 'Thank you for subscribing to our newsletter!',
        }),
      });

      if (response.ok) {
        alert('Subscription successful!');
        navigate('/thank-you'); 
      } else {
        alert('Error subscribing. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <Container textAlign='center' style={{ marginTop: '50px' }}>
      <h3>SIGN UP TO KNOW MORE</h3>
      <Form>
        <Form.Field inline>
          <Input
            type='email'
            placeholder='Enter your email'
            value={email}
            onChange={handleChange}
          />
          <Button primary onClick={handleSubscribe}>Subscribe</Button>
        </Form.Field>
      </Form>
    </Container>
  );
};

export default Subscribe;