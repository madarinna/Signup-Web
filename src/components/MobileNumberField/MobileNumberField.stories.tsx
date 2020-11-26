import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import MobileNumberField from "./MobileNumberField";

export default {
  title: "Components/MobileNumberField",
  component: MobileNumberField
} as Meta;

export const Overview = () => <MobileNumberField />;
Overview.args = {
  value: "+66123456789",
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