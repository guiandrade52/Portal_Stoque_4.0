import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      position: 'relative',
      padding: theme.spacing(1),
      background: '#eee',
      height: 'auto',
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
      marginTop: '-8px',
    },
  });
