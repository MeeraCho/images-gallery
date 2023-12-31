import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Welcome = () => (
  <Container>
    <h1>Images Gallery</h1>
    <p>This is a simple application that retrieves photos using Unsplash API</p>
    <p>In order to start, enter any search term in the input field.</p>
    <Button variant="primary" href="https://unsplash.com" target="_blank">
      Learn More Splash
    </Button>
  </Container>
);

export default Welcome;
