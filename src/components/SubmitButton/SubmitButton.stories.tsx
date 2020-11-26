import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import SubmitButton from "./SubmitButton";

export default {
  title: "Components/SubmitButton",
  component: SubmitButton
} as Meta;

export const Overview = () => (
  <SubmitButton />
);
Overview.args = {
}
