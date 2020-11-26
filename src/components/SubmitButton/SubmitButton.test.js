import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, wait } from "@testing-library/react";
import SubmitButton from "./SubmitButton";

describe(SubmitButton, () => {
	test("renders label", () => {
	  const { getByText } = render(<SubmitButton />);
	  expect(getByText("Continue")).toBeTruthy();
	});

	test("renders role", () => {
		const { getByRole } = render(<SubmitButton />);
		expect(getByRole("button")).toBeTruthy();
	});
});
