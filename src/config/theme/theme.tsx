import { createMuiTheme } from '@material-ui/core/styles';
import palette from './palette';
import typography from './typography';
import overrides from './overrides';
import props from './props';

const baseTheme = {
  overrides,
  palette,
  props,
  typography,
};

const theme = createMuiTheme(baseTheme);
const themeWithRtl = createMuiTheme({ ...baseTheme, direction: 'rtl' });

export { palette, themeWithRtl, theme as default };
