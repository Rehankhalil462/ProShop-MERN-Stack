import UserActionTypes from './user.types';

const INITIAL_STATE = {
  loading: false,
  userInfo: {},
};

export const userLoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.USER_LOGIN_REQUEST:
      return {
        loading: true,
      };
    case UserActionTypes.USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case UserActionTypes.USER_LOGIN_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    case UserActionTypes.USER_LOGOUT:
      return {};

    default:
      return state;
  }
};

export const userRegisterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.USER_REGISTER_REQUEST:
      return {
        loading: true,
      };
    case UserActionTypes.USER_REGISTER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case UserActionTypes.USER_REGISTER_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    case UserActionTypes.USER_LOGOUT:
      return {};

    default:
      return state;
  }
};
