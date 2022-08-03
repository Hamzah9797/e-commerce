import { ActionType } from "../action-types";
import { CartActions } from "../actions";
import { Dispatch } from "redux";
import axios from "axios";
import { userRequest } from "./../../requestMethod";

export const addToCart =
  (id: string, qty) => async (dispatch: Dispatch<CartActions>, getState) => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/products/find/" + id
      );
      dispatch({
        type: ActionType.ADD_TO_CART,
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
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
