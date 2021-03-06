import UserActionTypes from './user.types';
import axios from 'axios';

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
