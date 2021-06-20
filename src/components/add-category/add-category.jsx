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
  const [name, setName] = React.useState('');
  const [income, setIncome] = React.useState(false);
  const [expense, setExpense] = React.useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleIncomeChange = (event) => {
    setIncome(event.target.checked);
  };

  const handleExpenseChange = (event) => {
    setExpense(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Grid container direction='column' alignItems='center' justify='center' className={classes.container}>
      <form action='' method='POST' onSubmit={handleSubmit}>
        <Grid item>
          <TextField
            id='name'
            label='Название'
            className={classes.formControl}
            value={name}
            onChange={handleNameChange}
          />
        </Grid>
        <Grid container item className={classes.formControl} justify='space-between'>
          <FormControlLabel
            control={
              <Checkbox
                checked={income}
                color='primary'
                inputProps={{ 'aria-label': 'Доход' }}
                onChange={handleIncomeChange}
              />
            }
            label='Доход'
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={expense}
                color='primary'
                inputProps={{ 'aria-label': 'Доход' }}
                onChange={handleExpenseChange}
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
