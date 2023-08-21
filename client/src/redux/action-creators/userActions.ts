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

export const register = (username: string, email: string, password: string) => {
  return async (dispatch: Dispatch<UserActions>, getState) => {
    dispatch({
      type: ActionType.REGISTER_REQUEST,
    });
    try {
      const { data } = await publicRequest.post("/auth/register", {
        username,
        email,
        password,
      });
      dispatch({
        type: ActionType.REGISTER_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: ActionType.REGISTER_FAIL,
        payload: `There was an error fethching the user`,
      });
    }
  };
};
