import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import MuiTypography from '@material-ui/core/Typography';
import { colors } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core/styles';

interface TypographyProps {
  children: React.ReactNode;
}

const Typography = ({ children }: TypographyProps) => {
  return <>{children}</>;
};

export default {
  title: 'Theme/Typography',
  component: Typography,
  argTypes: {},
} as Meta;

const Template: Story<TypographyProps> = (args) => <Typography {...args} />;

export const Headings = (args) => {
  const theme = useTheme();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <MuiTypography variant="h1" gutterBottom>
          h1. Heading
        </MuiTypography>
        <MuiTypography variant="h2" gutterBottom>
          h2. Heading
        </MuiTypography>
        <MuiTypography variant="h3" gutterBottom>
          h3. Heading
        </MuiTypography>
        <MuiTypography variant="h4" gutterBottom>
          h4. Heading
        </MuiTypography>
        <MuiTypography variant="h5" gutterBottom>
          h5. Heading
        </MuiTypography>
        <MuiTypography variant="h6" gutterBottom>
          h6. Heading
        </MuiTypography>
      </Grid>
    </Grid>
  );
};

export const Paragraph = (args) => {
  const theme = useTheme();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <MuiTypography variant="subtitle1" gutterBottom>
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        </MuiTypography>
        <MuiTypography variant="subtitle2" gutterBottom>
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        </MuiTypography>
        <MuiTypography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
          beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
          Eum quasi quidem quibusdam.
        </MuiTypography>
        <MuiTypography variant="body2" gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
          beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
          Eum quasi quidem quibusdam.
        </MuiTypography>
        <MuiTypography variant="button" display="block" gutterBottom>
          button text
        </MuiTypography>
        <MuiTypography variant="caption" display="block" gutterBottom>
          caption text
        </MuiTypography>
        <MuiTypography variant="overline" display="block" gutterBottom>
          overline text
        </MuiTypography>
      </Grid>
    </Grid>
  );
};
