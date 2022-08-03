import { ActionType } from "../action-types";
import { CartActions } from "../actions";

interface CartState {
  products: any[];
  quantity: number;
  total: number;
}

const initialState = {
  products: [],
  quantity: 0,
  total: 0,
};

export const cartReducer = (
  state: CartState = initialState,
  action: CartActions
): CartState => {
  switch (action.type) {
    case ActionType.ADD_TO_CART:
      const item = action.payload;
      const existItem = state.products.find((x) => x._id === item._id);
      if (existItem) {
        return {
          ...state,
          products: state.products.map((x) =>
            x._id === existItem._id ? item : x
          ),
          quantity: state.quantity + 1,
          total: state.total + action.payload.price,
        };
      } else {
        return {
          ...state,
          products: [...state.products, item],
          quantity: state.quantity + 1,
          total: state.total + action.payload.price,
        };
      }
    default:
      return state;
  }
};
