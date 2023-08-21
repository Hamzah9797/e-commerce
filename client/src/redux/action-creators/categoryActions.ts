import { ActionType } from "../action-types";
import { CategoriesActions } from "../actions";
import { Dispatch } from "redux";
import { publicRequest } from "./../../requestMethod";

export const getAllCategories = () => {
  return async (dispatch: Dispatch<CategoriesActions>) => {
    dispatch({
      type: ActionType.GET_ALL_CATEGORIES_REQUEST,
    });
    try {
      const { data } = await publicRequest.get("/categories");
      dispatch({
        type: ActionType.GET_ALL_CATEGORIES_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: ActionType.GET_ALL_CATEGORIES_FAIL,
        payload: `There was an error fethching the categories`,
      });
    }
  };
};
