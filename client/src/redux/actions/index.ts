/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionType } from "../action-types";

interface AddToCart {
  type: ActionType.ADD_TO_CART;
  payload: any;
}

interface LoginRequest {
  type: ActionType.LOGIN_REQUEST;
}

interface LoginSuccess {
  type: ActionType.LOGIN_SUCCESS;
  payload: any;
}

interface LoginFail {
  type: ActionType.LOGIN_FAIL;
  payload: string;
}

interface GetAllProductsRequest {
  type: ActionType.GET_ALL_PRODUCTS_REQUEST;
}

interface GetAllProductsSuccess {
  type: ActionType.GET_ALL_PRODUCTS_SUCCESS;
  payload: any;
}

interface GetAllProductsFail {
  type: ActionType.GET_ALL_PRODUCTS_FAIL;
  payload: string;
}

interface GetAllCategoriesRequest {
  type: ActionType.GET_ALL_CATEGORIES_REQUEST;
}

interface GetAllCategoriesSuccess {
  type: ActionType.GET_ALL_CATEGORIES_SUCCESS;
  payload: any;
}

interface GetAllCategoriesFail {
  type: ActionType.GET_ALL_CATEGORIES_FAIL;
  payload: string;
}

export type CartActions = AddToCart;
export type UserActions = LoginRequest | LoginFail | LoginSuccess;
export type ProductsActions =
  | GetAllProductsRequest
  | GetAllProductsSuccess
  | GetAllProductsFail;
export type CategoriesActions =
  | GetAllCategoriesRequest
  | GetAllCategoriesSuccess
  | GetAllCategoriesFail;
