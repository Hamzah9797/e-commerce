/* eslint-disable */
import { ActionType } from "../action-types";
import { UserActions } from "../actions";

interface UserState {
  currentUser: any;
  isFetching: boolean;
  error: boolean | string;
}

const initialState = {
  currentUser: null,
  isFetching: false,
  error: false,
};

export const userReducer = (
  state: UserState = initialState,
  action: UserActions
): UserState => {
  switch (action.type) {
    case ActionType.LOGIN_REQUEST:
      return {
        currentUser: null,
        isFetching: true,
        error: false,
      };
    case ActionType.LOGIN_SUCCESS:
      return {
        currentUser: action.payload,
        isFetching: false,
        error: false,
      };
    case ActionType.LOGIN_FAIL:
      return {
        currentUser: null,
        isFetching: false,
        error: action.payload,
      };
    case ActionType.REGISTER_REQUEST:
      return {
        currentUser: null,
        isFetching: true,
        error: false,
      };
    case ActionType.REGISTER_SUCCESS:
      return {
        currentUser: action.payload,
        isFetching: false,
        error: false,
      };
    case ActionType.REGISTER_FAIL:
      return {
        currentUser: null,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
