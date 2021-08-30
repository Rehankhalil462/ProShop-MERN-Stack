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
import ShippingPage from './pages/ShippingPage/ShippingPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';
import PlaceOrderPage from './pages/PlaceOrderPage/PlaceOrderPage';
import OrderPage from './pages/OrderPage/OrderPage';
import OrderListPage from './pages/OrdersListPage/OrderListPage';
import UserListPage from './pages/UsersListPage/UsersListPage';
import UserEditPage from './pages/UserEditPage/UserEditPage';
import ProductsListPage from './pages/ProductsListPage/ProductsListPage';
import ProductEditPage from './pages/ProductEditPage/ProductEditPage';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/order/:id' component={OrderPage} />
          <Route path='/shipping' component={ShippingPage} />
          <Route path='/payment' component={PaymentPage} />
          <Route path='/placeorder' component={PlaceOrderPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegistrationPage} />
          <Route path='/profile' component={ProfilePage} />
          <Route path='/product/:id' component={ProductPage} />
          <Route path='/cart/:id?' component={CartPage} />
          <Route path='/admin/userlist' component={UserListPage} />
          <Route path='/admin/user/:id/edit' component={UserEditPage} />
          <Route path='/admin/productlist' component={ProductsListPage} exact />
          <Route
            path='/admin/productlist/:pageNumber'
            component={ProductsListPage}
            exact
          />
          <Route path='/admin/product/:id/edit' component={ProductEditPage} />
          <Route path='/admin/orderlist' component={OrderListPage} />
          <Route path='/search/:keyword' component={HomePage} exact />
          <Route path='/page/:pageNumber' component={HomePage} exact />

          <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomePage}
            exact
          />
          <Route exact path='/' component={HomePage} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
