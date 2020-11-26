import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Typography from '@material-ui/core/Typography';
import { colors } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core/styles';

interface PaletteProps {}

const Palette = ({ children }) => {
  return <>{children}</>;
};

export default {
  title: 'Theme/Palette',
  component: Palette,
  argTypes: {},
} as Meta;

export const BasicPalette = (args) => {
  const theme = useTheme();
  return (
    <Palette>
      <div>
        <Typography component="div" variant="body1">
          <h3>Primary</h3>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Box bgcolor={theme.palette.primary.dark} color={theme.palette.primary.contrastText} p={2}>
                Primary Dark
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box bgcolor={theme.palette.primary.main} color={theme.palette.primary.contrastText} p={2}>
                Primary Main
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box bgcolor={theme.palette.primary.light} color={theme.palette.primary.contrastText} p={2}>
                Primary Light
              </Box>
            </Grid>
          </Grid>
          <h3>Secondary</h3>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Box bgcolor={theme.palette.secondary.dark} color={theme.palette.secondary.contrastText} p={2}>
                Secondary Dark
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box bgcolor={theme.palette.secondary.main} color={theme.palette.secondary.contrastText} p={2}>
                Secondary Main
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box bgcolor={theme.palette.secondary.light} color={theme.palette.secondary.contrastText} p={2}>
                Secondary Light
              </Box>
            </Grid>
          </Grid>
          <h3>Background</h3>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Box bgcolor={theme.palette.background.default} color={theme.palette.text.primary} p={2}>
                Background
              </Box>
            </Grid>
          </Grid>

          <h3>Text Color</h3>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Box color={theme.palette.text.primary} p={2}>
                Primary Text
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box color={theme.palette.text.secondary} p={2}>
                Secondary Text
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box color={theme.palette.text.disabled} p={2}>
                Disabled Text
              </Box>
            </Grid>
          </Grid>
        </Typography>
      </div>
    </Palette>
  );
};

const ColorPalette = (args) => {
  const selectedColor = 'red';
  return (
    <Palette {...args}>
      const selectedColor = 'red'; return (
      <Grid container>
        <Grid item xs={3}>
          <Box bgcolor={colors[selectedColor][900]} p={2} color="white">
            {/*selectedColor*/}
          </Box>
          {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 'A100', 'A200', 'A400', 'A700'].map((num) => (
            <Box bgcolor={colors[selectedColor][num]} p={2} color={num < 400 ? 'black' : 'white'}>
              {selectedColor} {num}
            </Box>
          ))}
        </Grid>
      </Grid>
      );
    </Palette>
  );
};
