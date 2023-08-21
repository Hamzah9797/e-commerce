import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useTypedActions = (func: any) => {
  const dispatch = useDispatch();
  return bindActionCreators(func, dispatch);
};
