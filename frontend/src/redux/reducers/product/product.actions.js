import ProductActionTypes from './product.types';
import axios from 'axios';
import { logout } from '../user/user.actions';

export const listProducts =
  (keyword = '', pageNumber = '') =>
  async (dispatch) => {
    try {
      dispatch({
        type: ProductActionTypes.PRODUCT_LIST_REQUEST,
      });

      const { data } = await axios.get(
        `/api/products?keyword=${keyword}&pageNumber=${pageNumber}`
      );
      dispatch({
        type: ProductActionTypes.PRODUCT_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ProductActionTypes.PRODUCT_LIST_FAILURE,
        payload:
          error.message && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ProductActionTypes.PRODUCT_DELETE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    };

    await axios.delete(`/api/products/${id}`, config);
    dispatch({
      type: ProductActionTypes.PRODUCT_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: ProductActionTypes.PRODUCT_DELETE_FAILURE,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createProduct = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ProductActionTypes.PRODUCT_CREATE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    };

    const { data } = await axios.post(`/api/products`, {}, config);
    dispatch({
      type: ProductActionTypes.PRODUCT_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ProductActionTypes.PRODUCT_CREATE_FAILURE,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ProductActionTypes.PRODUCT_UPDATE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      'Content-Type': 'application/json',
      headers: { Authorization: `Bearer ${userInfo.token}` },
    };

    const { data } = await axios.put(
      `/api/products/${product._id}`,
      product,
      config
    );
    dispatch({
      type: ProductActionTypes.PRODUCT_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ProductActionTypes.PRODUCT_UPDATE_FAILURE,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createProductReview =
  (productId, review) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ProductActionTypes.PRODUCT_CREATE_REVIEW_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await axios.post(`/api/products/${productId}/reviews`, review, config);

      dispatch({
        type: ProductActionTypes.PRODUCT_CREATE_REVIEW_SUCCESS,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === 'Not authorized, token failed') {
        dispatch(logout());
      }
      dispatch({
        type: ProductActionTypes.PRODUCT_CREATE_REVIEW_FAIL,
        payload: message,
      });
    }
  };

export const listTopProducts = () => async (dispatch) => {
  try {
    dispatch({ type: ProductActionTypes.PRODUCT_TOP_REQUEST });

    const { data } = await axios.get(`/api/products/top`);

    dispatch({
      type: ProductActionTypes.PRODUCT_TOP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ProductActionTypes.PRODUCT_TOP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
