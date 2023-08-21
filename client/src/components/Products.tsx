import styled from "styled-components";

//data
import { useTypedSelector } from "../hooks/useTypedSelector";
import ProductCard from "./ProductCard";
import LoadingSpinner from "./LoadingSpinner";

//styled components

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products: React.FC = () => {
  const { products } = useTypedSelector((state) => state);

  return (
    <Container>
      {products.products.map((item) => (
        <ProductCard item={item} key={item._id} />
      ))}
    </Container>
  );
};

export default LoadingSpinner(Products);
