import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  Select,
  TextField
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import ruLocale from 'date-fns/locale/ru';
import React from 'react';
import {useStyles} from './style.js';

export default function AddTansaction() {
  const classes = useStyles();
  const form = React.createRef();
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleChange = () => {

  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Grid container direction='column' alignItems='center' justify='center' className={classes.container}>
      <form action='' method='POST' onChange={handleChange} onSubmit={handleSubmit} ref={form}>
        <Grid container direction='column' alignItems='center' justify='center'>
          <Grid item>
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale} >
              <KeyboardDatePicker
                margin='normal'
                id='date-picker-dialog'
                label='Дата'
                format='dd-MM-yyyy'
                value={selectedDate}
                name='date'
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
                className={classes.formControl}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item>
            <FormControl className={classes.formControl}>
              <InputLabel for='kind'>Вид</InputLabel>
              <Select
                native
                id='kind'
                displayEmpty
                className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'Without label' }}
                name='kind'
              >
                <option aria-label='None' value='' />
                <option value={1}>Доход</option>
                <option value={2}>Расход</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl className={classes.formControl}>
              <InputLabel for='category'>Категория</InputLabel>
              <Select
                native
                id='category'
                displayEmpty
                className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'Without label' }}
                name='category'
              >
                <option aria-label='None' value='' />
                <option value={1}>Категория 1</option>
                <option value={2}>Категория 2</option>
              </Select>
            </FormControl>
          </Grid>

          <Grid item>
            <FormControl className={classes.formControl}>
              <InputLabel for='source'>Карта/наличные</InputLabel>
              <Select
                native
                id='source'
                displayEmpty
                className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'Without label' }}
                name='source'
              >
                <option aria-label='None' value='' />
                <option value={1}>Карта</option>
                <option value={2}>Наличные</option>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item>
          <TextField
            id='sum'
            label='Сумма'
            className={classes.formControl}
            name='sum'
          />
        </Grid>
        <Grid item>
          <TextField
            id='comment'
            label='Комментарий'
            multiline
            rowsMax={4}
            name='comment'
            className={classes.formControl}
          />
        </Grid>
        <Grid item className={classes.formControl}>
          <Grid container justify='space-between'>
            <Button variant='contained' color='primary' type='submit'>
              Сохранить
            </Button>
            <Button variant='contained' color='secondary'>
              Отменить
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
}
