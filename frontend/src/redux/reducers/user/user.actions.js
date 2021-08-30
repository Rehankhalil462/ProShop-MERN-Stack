import UserActionTypes from './user.types';
import axios from 'axios';
import { ORDER_LIST_MY_RESET } from '../order/order.types';
import CartActionTypes from '../cart/cart.types';
// login user actions
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: UserActionTypes.USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(
      '/api/users/login',
      { email, password },
      config
    );
    dispatch({
      type: UserActionTypes.USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: UserActionTypes.USER_LOGIN_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({
    type: UserActionTypes.USER_LOGOUT,
  });
  dispatch({ type: UserActionTypes.USER_DETAILS_RESET });
  dispatch({ type: ORDER_LIST_MY_RESET });
  dispatch({ type: CartActionTypes.CART_ITEMS_RESET });
  dispatch({ type: UserActionTypes.USER_LIST_RESET });
};

// register actions
export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: UserActionTypes.USER_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(
      '/api/users',
      { name, email, password },
      config
    );
    dispatch({
      type: UserActionTypes.USER_REGISTER_SUCCESS,
      payload: data,
    });

    dispatch({
      type: UserActionTypes.USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: UserActionTypes.USER_REGISTER_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// get user details
export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: UserActionTypes.USER_DETAILS_REQUEST,
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

    const { data } = await axios.get(`/api/users/${id}`, config);

    dispatch({
      type: UserActionTypes.USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UserActionTypes.USER_DETAILS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// update user Profile
export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: UserActionTypes.USER_UPDATE_PROFILE_REQUEST,
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

    const { data } = await axios.put('/api/users/profile', user, config);
    dispatch({
      type: UserActionTypes.USER_UPDATE_PROFILE_SUCCESS,
      payload: data,
    });

    dispatch({
      type: UserActionTypes.USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: UserActionTypes.USER_UPDATE_PROFILE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listUsers = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: UserActionTypes.USER_LIST_REQUEST,
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

    const { data } = await axios.get('/api/users', config);
    dispatch({
      type: UserActionTypes.USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UserActionTypes.USER_LIST_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteUser = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: UserActionTypes.USER_DELETE_REQUEST,
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

    await axios.delete(`/api/users/${id}`, config);
    dispatch({
      type: UserActionTypes.USER_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: UserActionTypes.USER_DELETE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateUser = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: UserActionTypes.USER_UPDATE_REQUEST,
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

    const { data } = await axios.put(`/api/users/${user._id}`, user, config);
    dispatch({
      type: UserActionTypes.USER_UPDATE_SUCCESS,
    });
    dispatch({ type: UserActionTypes.USER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: UserActionTypes.USER_UPDATE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
