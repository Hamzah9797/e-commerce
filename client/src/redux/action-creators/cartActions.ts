/* eslint-disable */
import { ActionType } from "../action-types";
import { CartActions } from "../actions";
import { Dispatch } from "redux";
import axios from "axios";
import { get } from "http";

export const addToCart =
  (id: string, qty, size: string, color: string) =>
  async (dispatch: Dispatch<CartActions>, getState) => {
    try {
      const productsArray = getState().products.products;
      const data = productsArray.find((product) => product._id === id);
      dispatch({
        type: ActionType.ADD_TO_CART,
        payload: {
          id: data._id,
          title: data.title,
          description: data.description,
          img: data.img,
          categories: data.categories,
          color: color,
          size: size,
          price: data.price,
          inStock: data.inStock,
          qty: qty,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

export const removeFromCart =
  (id: string) => async (dispatch: Dispatch<CartActions>, getState) => {
    try {
      const productsArray = getState().products.products;
      const data = productsArray.find((product) => product._id === id);
      dispatch({
        type: ActionType.REMOVE_FROM_CART,
        payload: {
          id: data._id,
          title: data.title,
          description: data.description,
          img: data.img,
          categories: data.categories,
          color: data.color,
          size: data.size,
          price: data.price,
          inStock: data.inStock,
          qty: data.qty,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
