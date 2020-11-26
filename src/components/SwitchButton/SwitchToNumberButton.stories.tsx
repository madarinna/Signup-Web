import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import SwitchToNumberButton from "./SwitchToNumberButton";

export default {
  title: "Components/SwitchToNumberButton",
  component: SwitchToNumberButton
} as Meta;

export const Overview = () => (
  <SwitchToNumberButton />
);
Overview.args = {
}
