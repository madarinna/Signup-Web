import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import EmailField from "./EmailField";

export default {
  title: "Components/EmailField",
  component: EmailField
} as Meta;

export const Overview = () => <EmailField />;
Overview.args = {
  value: "madar@it.com",
  label: "email",
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