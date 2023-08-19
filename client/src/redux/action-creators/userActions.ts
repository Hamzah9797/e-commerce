/* eslint-disable */
import { ActionType } from "../action-types";
import { UserActions } from "../actions";
import { Dispatch } from "redux";
import axios from "axios";
import { publicRequest } from "./../../requestMethod";

export const login = (user: any) => {
  return async (dispatch: Dispatch<UserActions>, getState) => {
    dispatch({
      type: ActionType.LOGIN_REQUEST,
    });
    try {
      const { data } = await publicRequest.post("/auth/login", user);
      dispatch({
        type: ActionType.LOGIN_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: ActionType.LOGIN_FAIL,
        payload: `There was an error fethching the user`,
      });
    }
  };
};
