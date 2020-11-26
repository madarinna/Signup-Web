import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, wait } from "@testing-library/react";
import SwitchToEmailButton from "./SwitchToEmailButton";


describe(SwitchToEmailButton, () => {

  test("renders label", () => {
    const { getByText } = render(<SwitchToEmailButton />);
    expect(getByText("Sign Up with Email")).toBeTruthy();
  });

  test("renders label", () => {
    const { getByRole } = render(<SwitchToEmailButton />);
    expect(getByRole("button")).toBeTruthy();
  });
});