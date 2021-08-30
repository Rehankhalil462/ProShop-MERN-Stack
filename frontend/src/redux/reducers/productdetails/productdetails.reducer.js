import ProductDetailsTypes from './productdetails.types';

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case ProductDetailsTypes.PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true };
    case ProductDetailsTypes.PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case ProductDetailsTypes.PRODUCT_DETAILS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
