import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Layout from './Layout';

export default {
  title: "Components/Layout",
  component: Layout
} as Meta;

export const Overview = () => <Layout />;
Overview.args = {
};