import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, wait } from "@testing-library/react";
import EmailField from "./EmailField";


describe(EmailField, () => {

  test("renders label", () => {
    const { getByText } = render(<EmailField />);
    expect(getByText("john@doe.com")).toBeTruthy();
  });

  test("renders label", () => {
    const { getByText } = render(<EmailField />);
    expect(getByText("Email Address")).toBeTruthy();
  });
});