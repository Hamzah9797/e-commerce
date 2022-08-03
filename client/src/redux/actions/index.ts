import { ActionType } from "../action-types";

interface AddToCart {
  type: ActionType.ADD_TO_CART;
  payload: any;
}

export type CartActions = AddToCart;
