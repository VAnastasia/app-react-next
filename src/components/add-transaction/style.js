import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    height: 'calc(100vh - 72px)',
  },
  formControl: {
    margin: theme.spacing(2),
    width: 300,
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export {useStyles};
