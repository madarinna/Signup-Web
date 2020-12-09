import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import PassField from "./PassField";

export default {
  title: "Components/PassField",
  component: PassField
} as Meta;

export const Overview = () => <PassField setDisableButton={console.log("password")} />;
Overview.args = {
  value: "ABCabc123!",
  label: "pass",
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