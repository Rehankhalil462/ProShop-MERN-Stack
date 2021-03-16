//can be used as a container for different forms

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FormContainer = ({ children }) => {
  console.log(children);
  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
