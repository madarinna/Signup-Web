import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, wait } from "@testing-library/react";
import PassField from "./PassField";


describe(PassField, () => {

  test("renders label", () => {
    const { getByText } = render(<PassField />);
    expect(getByText("Create password")).toBeTruthy();
  });
});