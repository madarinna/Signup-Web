import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    minHeight: '100vh',
    display: 'flex',
    '@media all and (-ms-high-contrast:none)': {
      height: 0, // IE11 fix
    },
  },
  title: {
    flexGrow: 1,
    '& a': {
      textDecoration: 'none',
      color: '#ffffff',
    },
  },
  content: {
    marginTop: theme.spacing(12),
    // padding: theme.spacing(4),
    flexGrow: 1,
    maxWidth: '100%',
    overflowX: 'hidden',
  },
}));

export default useStyles;
