import { OrderActionTypes } from './order.types';

const INITIAL_STATE = {
  loading: false,
  success: false,
  orderItems: [],
  shippingAddress: {},
  orders: [],
};

export const orderCreateReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OrderActionTypes.ORDER_CREATE_REQUEST:
      return {
        loading: true,
      };
    case OrderActionTypes.ORDER_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };
    case OrderActionTypes.ORDER_CREATE_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const orderDetailsReducer = (
  state = { loading: true, orderItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case OrderActionTypes.ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case OrderActionTypes.ORDER_DETAILS_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };
    case OrderActionTypes.ORDER_DETAILS_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export const orderPayReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OrderActionTypes.ORDER_PAY_REQUEST:
      return {
        loading: true,
      };
    case OrderActionTypes.ORDER_PAY_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case OrderActionTypes.ORDER_PAY_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    case OrderActionTypes.ORDER_PAY_RESET:
      return {};

    default:
      return state;
  }
};

export const orderListMyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OrderActionTypes.ORDER_LIST_MY_REQUEST:
      return {
        loading: true,
      };
    case OrderActionTypes.ORDER_LIST_MY_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case OrderActionTypes.ORDER_LIST_MY_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    case OrderActionTypes.ORDER_LIST_MY_RESET:
      return { orders: [] };

    default:
      return state;
  }
};

export const orderListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OrderActionTypes.ORDER_LIST_REQUEST:
      return {
        loading: true,
      };
    case OrderActionTypes.ORDER_LIST_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case OrderActionTypes.ORDER_LIST_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const orderDeliverReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OrderActionTypes.ORDER_DELIVER_REQUEST:
      return {
        loading: true,
      };
    case OrderActionTypes.ORDER_DELIVER_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case OrderActionTypes.ORDER_DELIVER_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    case OrderActionTypes.ORDER_DELIVER_RESET:
      return {};

    default:
      return state;
  }
};
