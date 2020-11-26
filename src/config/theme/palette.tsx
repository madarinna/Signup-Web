import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = colors.grey[900];
const selfie = {
  primary: '#BB5E34',
  background: '#F0E2D9',
  disabled: '#DDB29E',
};
export default {
  primary: {
    main: selfie.primary,
  },
  secondary: {
    main: colors.blue.A700,
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
  },
  text: {
    primary: selfie.primary[500] || black,
    secondary: colors.blueGrey[600],
    link: colors.blue[600],
    disabled: selfie.disabled,
  },
  link: colors.blue[800],
  icon: colors.blueGrey[600],
  background: {
    default: selfie.background || '#F4F6F8',
    paper: white,
  },
  divider: colors.grey[200],
};
