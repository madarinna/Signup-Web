import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, wait } from "@testing-library/react";
import MobileNumberField from "./MobileNumberField";

describe(MobileNumberField, () => {
	test("renders label", () => {
		const { getByText } = render(<MobileNumberField />);
		expect(getByText("+6612345678")).toBeTruthy();
	});

	test("renders label", () => {
		const { getByText } = render(<MobileNumberField />);
		expect(getByText("Mobile Number")).toBeTruthy();
	});
});
