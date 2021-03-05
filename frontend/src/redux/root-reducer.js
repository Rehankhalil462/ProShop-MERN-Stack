import { combineReducers } from 'redux';
import { productListReducer } from './reducers/product/product.reducer';
import { productDetailsReducer } from './reducers/productdetails/productdetails.reducer';

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailsReducer,
});

export default rootReducer;
