import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField
} from '@material-ui/core';
import React from 'react';
import {useStyles} from './style.js';

export default function AddCategory() {
  const classes = useStyles();
  const form = React.createRef();

  const handleChange = () => {

  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Grid container direction='column' alignItems='center' justify='center' className={classes.container}>
      <form action='' method='POST' onChange={handleChange} onSubmit={handleSubmit} ref={form}>
        <Grid item>
          <TextField
            id='name'
            label='Название'
            className={classes.formControl}
          />
        </Grid>
        <Grid container item className={classes.formControl} justify='space-between'>
          <FormControlLabel
            control={
              <Checkbox
                name='income'
                color='primary'
                inputProps={{ 'aria-label': 'Доход' }}
              />
            }
            label='Доход'
          />
          <FormControlLabel
            control={
              <Checkbox
                name='expense'
                color='primary'
                inputProps={{ 'aria-label': 'Доход' }}
              />
            }
            label='Расход'
          />
        </Grid>
        <Grid item className={classes.formControl}>
          <Grid container justify='space-between'>
            <Button variant='contained' color='primary' type='submit'>
              Сохранить
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>

  );
}
