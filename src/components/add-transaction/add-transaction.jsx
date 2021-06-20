import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import ruLocale from 'date-fns/locale/ru';
import React from 'react';
import {useStyles} from './style.js';

export default function AddTansaction() {
  const classes = useStyles();
  const [kind, setKind] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [source, setSource] = React.useState('');
  const [sum, setSum] = React.useState('');
  const [comment, setComment] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleKindChange = (event) => {
    setKind(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSourceChange = (event) => {
    setSource(event.target.value);
  };

  const handleSumChange = (event) => {
    setSum(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Grid container direction='column' alignItems='center' justify='center' className={classes.container}>
      <form action='' method='POST' onSubmit={handleSubmit}>
        <Grid container direction='column' alignItems='center' justify='center'>
          <Grid item>
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale} >
              <KeyboardDatePicker
                margin='normal'
                id='date-picker-dialog'
                label='Дата'
                format='dd-MM-yyyy'
                value={selectedDate}
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
                id='kind'
                displayEmpty
                className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'Without label' }}
                value={kind}
                onChange={handleKindChange}
              >
                <MenuItem value={1}>Доход</MenuItem>
                <MenuItem value={2}>Расход</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl className={classes.formControl}>
              <InputLabel id='category'>Категория</InputLabel>
              <Select
                id='category'
                displayEmpty
                className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'Without label' }}
                value={category}
                onChange={handleCategoryChange}
              >
                <MenuItem value={1}>Категория 1</MenuItem>
                <MenuItem value={2}>Категория 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item>
            <FormControl className={classes.formControl}>
              <InputLabel id='source'>Карта/наличные</InputLabel>
              <Select
                id='source'
                displayEmpty
                className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'Without label' }}
                value={source}
                onChange={handleSourceChange}
              >
                <MenuItem value={1}>Карта</MenuItem>
                <MenuItem value={2}>Наличные</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item>
          <TextField
            id='sum'
            label='Сумма'
            className={classes.formControl}
            value={sum}
            onChange={handleSumChange}
          />
        </Grid>
        <Grid item>
          <TextField
            id='comment'
            label='Комментарий'
            multiline
            rowsMax={4}
            value={comment}
            onChange={handleCommentChange}
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
