import ProductActionTypes from './product.types';

const INITIAL_STATE = {
  products: [],
  loading: false,
};

export const productListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductActionTypes.PRODUCT_LIST_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case ProductActionTypes.PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case ProductActionTypes.PRODUCT_LIST_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case ProductActionTypes.PRODUCT_DELETE_REQUEST:
      return {
        loading: true,
      };
    case ProductActionTypes.PRODUCT_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case ProductActionTypes.PRODUCT_DELETE_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ProductActionTypes.PRODUCT_CREATE_REQUEST:
      return {
        loading: true,
      };
    case ProductActionTypes.PRODUCT_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        product: action.payload,
      };
    case ProductActionTypes.PRODUCT_CREATE_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    case ProductActionTypes.PRODUCT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const productUpdateReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case ProductActionTypes.PRODUCT_UPDATE_REQUEST:
      return {
        loading: true,
      };
    case ProductActionTypes.PRODUCT_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        product: action.payload,
      };
    case ProductActionTypes.PRODUCT_UPDATE_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    case ProductActionTypes.PRODUCT_UPDATE_RESET:
      return { product: {} };
    default:
      return state;
  }
};

export const productReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ProductActionTypes.PRODUCT_CREATE_REVIEW_REQUEST:
      return { loading: true };
    case ProductActionTypes.PRODUCT_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true };
    case ProductActionTypes.PRODUCT_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case ProductActionTypes.PRODUCT_CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};

export const productTopRatedReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ProductActionTypes.PRODUCT_TOP_REQUEST:
      return { loading: true, products: [] };
    case ProductActionTypes.PRODUCT_TOP_SUCCESS:
      return { loading: false, products: action.payload };
    case ProductActionTypes.PRODUCT_TOP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
