import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { addToCart } from "../redux/action-creators/cartActions";

export const useTypedActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(addToCart, dispatch);
};
