import axios from 'axios';
import ProductDetailsTypes from './productdetails.types';

export const productDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: ProductDetailsTypes.PRODUCT_DETAILS_REQUEST,
    });
    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
      type: ProductDetailsTypes.PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ProductDetailsTypes.PRODUCT_DETAILS_FAILURE,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
