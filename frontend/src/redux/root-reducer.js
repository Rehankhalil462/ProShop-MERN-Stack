import { combineReducers } from 'redux';
import { productListReducer } from './reducers/product/product.reducer';
import { productDetailsReducer } from './reducers/productdetails/productdetails.reducer';
import { cartReducer } from './reducers/cart/cart.reducer';
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
} from './reducers/order/order.reducer';
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from './reducers/user/user.reducer';

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
});

export default rootReducer;
