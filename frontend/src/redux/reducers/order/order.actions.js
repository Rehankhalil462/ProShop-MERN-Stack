import { OrderActionTypes } from './order.types';
import axios from 'axios';

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: OrderActionTypes.ORDER_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    // console.log('this is users token', userInfo.token);
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post('/api/orders', order, config);
    dispatch({
      type: OrderActionTypes.ORDER_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: OrderActionTypes.ORDER_CREATE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: OrderActionTypes.ORDER_DETAILS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    // console.log('this is users token', userInfo.token);
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/orders/${id}`, config);
    dispatch({
      type: OrderActionTypes.ORDER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: OrderActionTypes.ORDER_DETAILS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const payOrder =
  (orderID, paymentResult) => async (dispatch, getState) => {
    try {
      dispatch({
        type: OrderActionTypes.ORDER_PAY_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();
      // console.log('this is users token', userInfo.token);
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `/api/orders/${orderID}/pay`,
        paymentResult,
        config
      );
      dispatch({
        type: OrderActionTypes.ORDER_PAY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: OrderActionTypes.ORDER_PAY_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listMyOrders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: OrderActionTypes.ORDER_LIST_MY_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    // console.log('this is users token', userInfo.token);
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/orders/myorders`, config);
    dispatch({
      type: OrderActionTypes.ORDER_LIST_MY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: OrderActionTypes.ORDER_LIST_MY_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listOrders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: OrderActionTypes.ORDER_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    // console.log('this is users token', userInfo.token);
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/orders`, config);
    dispatch({
      type: OrderActionTypes.ORDER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: OrderActionTypes.ORDER_LIST_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deliverOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: OrderActionTypes.ORDER_DELIVER_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    // console.log('this is users token', userInfo.token);
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/orders/${order._id}/deliver`,
      {},
      config
    );
    dispatch({
      type: OrderActionTypes.ORDER_DELIVER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: OrderActionTypes.ORDER_DELIVER_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
