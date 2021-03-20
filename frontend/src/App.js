import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';
import CartPage from './pages/CartPage/CartPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route exact path='/' component={HomePage} />
          <Route path='/product/:id' component={ProductPage} />
          <Route path='/cart/:id?' component={CartPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegistrationPage} />
          <Route path='/profile' component={ProfilePage} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
