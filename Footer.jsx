import React from 'react';
import { Grid, Segment, Container, List } from 'semantic-ui-react';

const Footer = () => (
  <Segment inverted vertical style={{ padding: '5em 0em', margin: '10px' }}>
    <Container>
        <h1> Welcome To Home Page </h1>
      <Grid >
        <Grid.Row>
          <Grid.Column width={6}>
            <h4>Explore</h4>
            <List link inverted>
              <List.Item as='a' to="/" >Home</List.Item>
              <List.Item as='a' >Questions</List.Item>
              <List.Item as='a'>Articles</List.Item>
              <List.Item as='a'>Tutorials</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={5}>
            <h4>Support</h4>
            <List link inverted>
              <List.Item as='a'>FAQ</List.Item>
              <List.Item as='a'>Help</List.Item>
              <List.Item as='a'>Contact Us</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={5}>
            <h4>Stay Connected</h4>
            <List link inverted>
              <List.Item as='a'>Facebook</List.Item>
              <List.Item as='a'>Instagram</List.Item>
              <List.Item as='a'>Twitter</List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Container textAlign='center'>
            <p>© Anime 2024</p>
            <p>
              <a href='/privacy-policy'>Privacy Policy</a> | 
              <a href='/terms'> Terms</a> 
            </p>
          </Container>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default Footer