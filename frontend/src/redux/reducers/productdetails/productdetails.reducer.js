import ProductDetailsTypes from './productdetails.types';

const INITIAL_STATE = {
  product: { reviews: [] },
  loading: false,
};

export const productDetailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductDetailsTypes.PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ProductDetailsTypes.PRODUCT_DETAILS_SUCCESS:
      return {
        product: action.payload,
        loading: false,
      };
    case ProductDetailsTypes.PRODUCT_DETAILS_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
