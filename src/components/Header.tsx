import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      textAlign: 'center',
      opacity: '90%',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  

const Header = () => {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <AppBar position="static" color="inherit">
            <Typography variant="h6" className={classes.title}>
              Expense Tracker App
            </Typography>
        </AppBar>
      </div>
    );
  }

export default Header

