/* eslint-disable */
import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { userReducer } from "./userReducer";
import { productsReducer } from "./productsReducer";
import { categoriesReducer } from "./categoriesReducer";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  products: productsReducer,
  categories: categoriesReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
