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
    case UserActionTypes.USER_DETAILS_RESET:
      return {
        user: {},
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

export const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case UserActionTypes.USER_LIST_REQUEST:
      return {
        loading: true,
      };
    case UserActionTypes.USER_LIST_SUCCESS:
      return {
        loading: false,
        users: action.payload,
      };
    case UserActionTypes.USER_LIST_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    case UserActionTypes.USER_LIST_RESET:
      return { users: [] };

    default:
      return state;
  }
};

export const userDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case UserActionTypes.USER_DELETE_REQUEST:
      return {
        loading: true,
      };
    case UserActionTypes.USER_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case UserActionTypes.USER_DELETE_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const userUpdateReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case UserActionTypes.USER_UPDATE_REQUEST:
      return {
        loading: true,
      };
    case UserActionTypes.USER_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case UserActionTypes.USER_UPDATE_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    case UserActionTypes.USER_UPDATE_RESET:
      return { user: {} };

    default:
      return state;
  }
};
