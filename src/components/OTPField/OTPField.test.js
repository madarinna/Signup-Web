import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, wait } from "@testing-library/react";
import OTPField from "./OTPField";

describe(OTPField, () => {
	test("renders label", () => {
		const { getByText } = render(<OTPField />);
		expect(getByText("OTP")).toBeTruthy();
	});
});
