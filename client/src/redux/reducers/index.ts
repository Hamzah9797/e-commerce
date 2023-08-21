/* eslint-disable */
import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { userReducer } from "./userReducer";
import { productsReducer } from "./productsReducer";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  products: productsReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
