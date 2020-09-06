import React from 'react';
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';

export class Footer extends React.Component {
  render() {
    return (
      <footer className='footer'>
        <Container>
          <Row>
            <Col className='text-center'>Aaron Bertagnole 2020</Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
