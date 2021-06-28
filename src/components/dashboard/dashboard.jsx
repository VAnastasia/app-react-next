import {
  AppBar,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  Paper,
  Toolbar,
  Typography
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import Link from 'next/link'
import React from 'react';
import { useStyles } from './styles.js';


export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position='absolute' className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component='span' variant='h6' color='inherit' noWrap className={classes.title}>
            Дашборд
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List component='nav'>
          <ListItem>
            <Link href='/' >
              <a activeClassName='active-link' className='link'><Typography variant='subtitle1' component='span'>Главная</Typography></a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href='/dashboard'>
              <a activeClassName='active-link' className='link'><Typography variant='subtitle1' component='span'>Дашборд</Typography></a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href='/transactions' >
              <a activeClassName='active-link' className='link'><Typography variant='subtitle1' component='span'>Транзакции</Typography></a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href='/reports'>
              <a activeClassName='active-link' className='link'><Typography variant='subtitle1' component='span'>Отчеты</Typography></a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href='/categories'>
              <a activeClassName='active-link' className='link'><Typography variant='subtitle1' component='span'>Категории</Typography></a>
            </Link>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth='lg' className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                Мои счета
                <br />
                Баланс
                <br />
                Наличные
                <br />
                Карты
                <br />
              </Paper>
            </Grid>
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>Баланс</Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={fixedHeightPaper}>Прогноз</Paper>
            </Grid>
          </Grid>

        </Container>
      </main>
    </div>
  );
}
