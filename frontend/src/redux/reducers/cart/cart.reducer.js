import CartActionTypes from './cart.types';

const INITIAL_STATE = {
  cartItems: [],
  shippingAddress: {},
  paymentMethod: {},
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM_TO_CART:
      const item = action.payload;

      const isExist = state.cartItems.find((x) => x.product === item.product);
      if (isExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === isExist.product ? item : x
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    case CartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.product !== action.payload
        ),
      };
    case CartActionTypes.CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case CartActionTypes.CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    case CartActionTypes.CART_ITEMS_RESET:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};
