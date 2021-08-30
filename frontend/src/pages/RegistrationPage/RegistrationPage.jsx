import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Image, Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ErrorMessage from '../../components/errormessage/errormessage';
import Loader from '../../components/loader/Loader';
import { register } from '../../redux/reducers/user/user.actions';
import Registration from './Registration.png';
import Swal from 'sweetalert2';

import VisibilityOffRoundedIcon from '@material-ui/icons/VisibilityOffRounded';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';

const RegistrationPage = ({ location, history }) => {
  const [name, setName] = useState('');

  const [type, setType] = useState('password');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);

  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registered Successfully!',
        showConfirmButton: false,
        timer: 2000,
      });
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match!');
    } else {
      dispatch(register(name, email, password));
      setMessage(null);
    }
    // Dispatch Login
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
            src={Registration}
            alt='Registration Logo'
            fluid
            style={{ border: 'none' }}
          ></Image>
        </Col>
        <Col xs={12} md={6}>
          <h1>Sign Up</h1>
          {message && <ErrorMessage variant='danger'>{message}</ErrorMessage>}

          {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}

          {loading ? (
            <Loader />
          ) : (
            <Form onSubmit={submitHandler}>
              <Form.Group controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type='name'
                  value={name}
                  placeholder='Enter Your Name'
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>

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
                </Row>
              </Form.Group>
              <Form.Group controlId='confirmPassword'>
                <Form.Label>Confirm Password</Form.Label>
                <Row>
                  <Col xs={9}>
                    <Form.Control
                      type={type}
                      value={confirmPassword}
                      placeholder='Confirm Password'
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </Col>
                  <Col>
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
                Register
              </Button>
            </Form>
          )}
          <Row className='py-3'>
            <Col>
              Have an Account ?{' '}
              <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
                Sign In
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationPage;
