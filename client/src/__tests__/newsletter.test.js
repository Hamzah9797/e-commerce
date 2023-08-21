/* eslint-disable no-undef */
import { render, fireEvent } from "@testing-library/react";
import Newsletter from "../components/NewsLetter";

test("renders newsletter form and handles input", () => {
  const { getByPlaceholderText } = render(<Newsletter />);

  // Get the email input element using the placeholder text
  const emailInput = getByPlaceholderText("Your email");

  // Simulate typing an email
  fireEvent.change(emailInput, { target: { value: "test@example.com" } });

  // Check if the input value has been updated
  expect(emailInput.value).toBe("test@example.com");
});
