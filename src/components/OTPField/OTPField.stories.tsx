import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import OTPField from "./OTPField";

export default {
  title: "Components/OTPField",
  component: OTPField
} as Meta;

export const Overview = () => <OTPField />;
Overview.args = {
  value: "123456",
  label: "number",
};
Overview.argTypes = {
  label: {
    table: {
      type: { summary: "string" },
    },
    control: { type: "text" },
  },
  value: {
    table: {
      type: { summary: "string" },
    },
    control: { type: "text" },
  }
};