import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import SwitchToEmailButton from "./SwitchToEmailButton";

export default {
  title: "Components/SwitchToEmailButton",
  component: SwitchToEmailButton
} as Meta;

export const Overview = () => (
  <SwitchToEmailButton />
);
Overview.args = {
}
