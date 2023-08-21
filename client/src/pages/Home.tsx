//components
import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useEffect } from "react";
import { getAllProducts } from "../redux/action-creators/productActions";
import { useDispatch } from "react-redux";

const Home = () => {
  const { categories } = useTypedSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div>
      <Announcement />
      <NavBar />
      <Slider />
      <Categories categories={categories.categories} />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
