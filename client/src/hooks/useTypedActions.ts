import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { addToCart } from "../redux/action-creators/cartActions";
import { login } from "../redux/action-creators/userActions";

export const useTypedActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(addToCart, dispatch);
};

export const useTypedActionsUser = () => {
  const dispatch = useDispatch();
  return bindActionCreators(login, dispatch);
};
