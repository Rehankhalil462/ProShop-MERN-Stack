import { combineReducers } from 'redux';
import { productListReducer } from './reducers/product/product.reducer';
import { productDetailsReducer } from './reducers/productdetails/productdetails.reducer';
import { cartReducer } from './reducers/cart/cart.reducer';
import { userLoginReducer } from './reducers/user/user.reducer';

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
});

export default rootReducer;
