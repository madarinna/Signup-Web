import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import SocialButton from "./SocialButton";

export default {
  title: "Components/SocialButton",
  component: SocialButton
} as Meta;

export const Overview = () => (
  <SocialButton />
);
Overview.args = {
}
