import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/Logo.svg';

const navbarStyle = {
  backgroundColor: '#eefffe',
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <Logo style={{ maxWidth: '40rem', maxHeight: '4rem' }} />
      </Container>
    </Navbar>
  );
};

export default Header;
