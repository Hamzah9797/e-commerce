//dependencies
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import { useTypedSelector } from "./hooks/useTypedSelector";

//pages
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useEffect } from "react";
import { getAllCategories } from "./redux/action-creators/categoryActions";
import { useDispatch } from "react-redux";
import Protected from "./components/Protected";

export default function App() {
  const dispatch = useDispatch();
  const user = useTypedSelector((state) => state.user.currentUser);

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products/:category">
          <ProductList />
        </Route>
        <Route exact path="/product/:id">
          <ProductPage />
        </Route>
        <Route exact path="/cart">
          <Protected isLoggedIn={user}>
            <Cart />
          </Protected>
        </Route>
        <Route exact path="/login">
          {user ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route exact path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
}
