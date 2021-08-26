import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Image, Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ErrorMessage from '../../components/errormessage/errormessage';
import Loader from '../../components/loader/Loader';
import { login } from '../../redux/reducers/user/user.actions';
import Login from './NewLogin.png';

import VisibilityOffRoundedIcon from '@material-ui/icons/VisibilityOffRounded';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';

const LoginPage = ({ location, history }) => {
  const [type, setType] = useState('password');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);

  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();

    // Dispatch Login
    dispatch(login(email, password));
  };

  const toggleHiddenPassword = (e) => {
    e.preventDefault();
    setType('text');
  };
  const toggleShowPassword = (e) => {
    e.preventDefault();

    setType('password');
  };

  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col md={6}>
          <Image
            src={Login}
            alt='Sign In Logo'
            fluid
            style={{ border: 'none' }}
          ></Image>
        </Col>
        <Col xs={12} md={6}>
          <h1>Sign In</h1>
          {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
          {loading ? (
            <Loader />
          ) : (
            <Form onSubmit={submitHandler}>
              <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type='email'
                  value={email}
                  placeholder='Enter Email'
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Row>
                  <Col xs={9}>
                    <Form.Control
                      type={type}
                      value={password}
                      placeholder='Enter Password'
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Col>
                  <Col className='d-flex'>
                    {type === 'password' ? (
                      <button
                        onClick={toggleHiddenPassword}
                        style={{ border: 'none' }}
                      >
                        <VisibilityRoundedIcon />
                      </button>
                    ) : (
                      <button
                        style={{ border: 'none' }}
                        onClick={toggleShowPassword}
                      >
                        <VisibilityOffRoundedIcon />
                      </button>
                    )}
                  </Col>
                </Row>
              </Form.Group>
              <Button type='submit' variant='primary'>
                Sign In
              </Button>
            </Form>
          )}

          <Row className='py-3'>
            <Col>
              New Customer ?{' '}
              <Link
                to={redirect ? `/register?redirect=${redirect}` : '/register'}
              >
                Register
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
