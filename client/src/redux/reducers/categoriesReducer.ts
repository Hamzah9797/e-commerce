import { Category } from "../../types";
import { ActionType } from "../action-types";

interface CategoryState {
  categories: Category[];
  isFetching: boolean;
  error: boolean | string;
}

const initialState = {
  categories: [],
  isFetching: false,
  error: false,
};

export const categoriesReducer = (
  state: CategoryState = initialState,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  action: any
): CategoryState => {
  switch (action.type) {
    case ActionType.GET_ALL_CATEGORIES_REQUEST:
      return {
        categories: [],
        isFetching: true,
        error: false,
      };
    case ActionType.GET_ALL_CATEGORIES_SUCCESS:
      return {
        categories: action.payload,
        isFetching: false,
        error: false,
      };
    case ActionType.GET_ALL_CATEGORIES_FAIL:
      return {
        categories: [],
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
