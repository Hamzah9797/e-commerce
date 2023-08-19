import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CategoryItem from "../components/CategoryItem";

test("renders CategoryItem component with correct title and button", () => {
  const item = {
    id: 1,
    img: "sample.jpg",
    title: "Sample Category",
    cat: "sample-category",
  };

  render(
    <MemoryRouter>
      <CategoryItem item={item} />
    </MemoryRouter>
  );

  const titleElement = screen.getByText(item.title);
  const buttonElement = screen.getByText("Shop Now");

  expect(titleElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});
