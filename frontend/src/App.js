import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route exact path='/' component={HomePage} />
          <Route path='/product/:id' component={ProductPage} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
