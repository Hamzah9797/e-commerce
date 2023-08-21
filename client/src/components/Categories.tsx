// dependencies
/* eslint-disable */
import styled from "styled-components";
import { mobile } from "../responsive";

//components
import CategoryItem from "./CategoryItem";

//data
import { Category } from "../types";

// styled components

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

interface CategoriesProps {
  categories: Category[];
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item._id} />
      ))}
    </Container>
  );
};

export default Categories;
