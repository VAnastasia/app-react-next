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
import React, {createRef, useState} from 'react';
import {Category} from '../../types';
import {useStyles} from './style.js';

interface Props {
  categories: Category[],
  onSubmit: (evt: React.SyntheticEvent<EventTarget>) => void,
  onChange: (evt: React.SyntheticEvent<EventTarget>) => void
}

const AddTansaction: React.FunctionComponent<Props> = ({categories, onSubmit, onChange}: Props) => {
  const classes = useStyles();
  const form: React.LegacyRef<HTMLFormElement> = createRef();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleReset = () => {
    setSelectedDate(new Date());
  };

  return (
    <Grid container direction='column' alignItems='center' justify='center' className={classes.container}>
      <form action='' method='POST' onChange={onChange} onSubmit={onSubmit} onReset={handleReset} ref={form}>
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
              <InputLabel id='kind'>Вид</InputLabel>
              <Select
                native
                labelId='kind'
                displayEmpty
                className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'Without label' }}
                name='kind'
              >
                <option aria-label='None' value='' />
                <option value={'income'}>Доход</option>
                <option value={'expense'}>Расход</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl className={classes.formControl}>
              <InputLabel id='category'>Категория</InputLabel>
              <Select
                native
                labelId='category'
                displayEmpty
                className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'Without label' }}
                name='category'
              >
                <option aria-label='None' value='' />
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item>
            <FormControl className={classes.formControl}>
              <InputLabel id='source'>Карта/наличные</InputLabel>
              <Select
                native
                labelId='source'
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
            <Button variant='contained' color='secondary' type='reset'>
              Отменить
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
}

export default AddTansaction;
