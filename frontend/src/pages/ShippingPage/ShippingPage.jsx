import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Registration from './Registration.png';
import { saveShippingAddress } from '../../redux/reducers/cart/cart.actions';
import CheckoutSteps from '../../components/checkoutsteps/CheckoutSteps';

const ShippingPage = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const dispatch = useDispatch();

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [PostalCode, setPostalCode] = useState(shippingAddress.PostalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, PostalCode, country }));
    history.push('/payment');
  };

  return (
    <Container>
      <CheckoutSteps step1 step2 />
      <Row className='justify-content-md-center'>
        <Col md={6}>
          <Image
            src={Registration}
            alt='Registration Logo'
            fluid
            style={{ border: 'none' }}
          ></Image>
        </Col>
        <Col xs={12} md={6}>
          <h1>Shipping</h1>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='address'>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type='text'
                required
                value={address}
                placeholder='Enter Your Address'
                onChange={(e) => setAddress(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='city'>
              <Form.Label>City</Form.Label>
              <Form.Control
                type='text'
                required
                value={city}
                placeholder='Enter Your City'
                onChange={(e) => setCity(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='postalcode'>
              <Form.Label>Postal Code</Form.Label>
              <Form.Control
                type='text'
                required
                value={PostalCode}
                placeholder='Enter Your Postal Code'
                onChange={(e) => setPostalCode(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='country'>
              <Form.Label>Country</Form.Label>
              <Form.Control
                type='text'
                required
                value={country}
                placeholder='Enter Your Country'
                onChange={(e) => setCountry(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button type='submit' variant='primary'>
              Continue
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ShippingPage;
