import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Typography from '@material-ui/core/Typography';

import Page, { PageProps } from './Page';

export default {
  title: 'Components/Page',
  component: Page,
  argTypes: {},
} as Meta;

const Template: Story<PageProps> = (args) => <Page {...args} />;

export const Default = (args) => (
  <Page {...args}>
    <Typography variant="body1">The content</Typography>
  </Page>
);

export const WithPageTitle = (args) => (
  <Page pageTitle="This is the title" {...args}>
    <Typography variant="body1">The content</Typography>
  </Page>
);

export const WithTopbar = (args) => (
  <Page container {...args}>
    <Typography variant="body1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae rutrum dui. Cras condimentum posuere dui, a
      hendrerit mauris feugiat id. Donec in ante ipsum. Integer at aliquet quam. Aenean eu sapien ligula. Ut mattis
      neque leo
    </Typography>
  </Page>
);