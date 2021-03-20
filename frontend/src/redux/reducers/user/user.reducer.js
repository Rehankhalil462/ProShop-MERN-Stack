import UserActionTypes from './user.types';

export const userLoginReducer = (state = {}, action) => {
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

export const userRegisterReducer = (state = {}, action) => {
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

export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case UserActionTypes.USER_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case UserActionTypes.USER_DETAILS_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };
    case UserActionTypes.USER_DETAILS_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case UserActionTypes.USER_UPDATE_PROFILE_REQUEST:
      return {
        loading: true,
      };
    case UserActionTypes.USER_UPDATE_PROFILE_SUCCESS:
      return {
        success: true,
        loading: false,
        userInfo: action.payload,
      };
    case UserActionTypes.USER_UPDATE_PROFILE_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    case UserActionTypes.USER_UPDATE_PROFILE_RESET:
      return {};

    default:
      return state;
  }
};
