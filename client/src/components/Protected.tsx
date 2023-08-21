import { useHistory } from "react-router-dom";
import React from "react";

type ProtectedProps = {
  isLoggedIn: boolean;
  children: JSX.Element;
};

const Protected: React.FC<ProtectedProps> = ({ isLoggedIn, children }) => {
  const history = useHistory();
  if (!isLoggedIn) {
    history.push("/login");
  }
  return children;
};
export default Protected;
