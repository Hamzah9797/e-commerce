// dependencies
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

//components
import CategoryItem from "./CategoryItem";

//data
import { categories } from "../data";

// styled components

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
