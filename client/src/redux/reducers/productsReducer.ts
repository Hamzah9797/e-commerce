/* eslint-disable */
import { Product } from "../../types";
import { ActionType } from "../action-types";

interface ProductState {
  products: Product[];
  isFetching: boolean;
  error: boolean | string;
}

const initialState = {
  products: [],
  isFetching: false,
  error: false,
};

export const productsReducer = (
  state: ProductState = initialState,
  action: any
): ProductState => {
  switch (action.type) {
    case ActionType.GET_ALL_PRODUCTS_REQUEST:
      return {
        products: [],
        isFetching: true,
        error: false,
      };
    case ActionType.GET_ALL_PRODUCTS_SUCCESS:
      return {
        products: action.payload,
        isFetching: false,
        error: false,
      };
    case ActionType.GET_ALL_PRODUCTS_FAIL:
      return {
        products: [],
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
