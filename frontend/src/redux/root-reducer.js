import { combineReducers } from 'redux';
import { productListReducer } from './reducers/product/product.reducer';

const rootReducer = combineReducers({
  productList: productListReducer,
});

export default rootReducer;
