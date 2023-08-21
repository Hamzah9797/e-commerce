import { ActionType } from "../action-types";
import { ProductsActions } from "../actions";
import { Dispatch } from "redux";
import { publicRequest } from "./../../requestMethod";

export const getAllProducts = () => {
  return async (dispatch: Dispatch<ProductsActions>) => {
    dispatch({
      type: ActionType.GET_ALL_PRODUCTS_REQUEST,
    });
    try {
      const { data } = await publicRequest.get("/products");
      dispatch({
        type: ActionType.GET_ALL_PRODUCTS_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: ActionType.GET_ALL_PRODUCTS_FAIL,
        payload: `There was an error fethching the products`,
      });
    }
  };
};
