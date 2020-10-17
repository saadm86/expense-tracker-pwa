import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      textAlign: 'center'
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
        <AppBar position="static">
            <Typography variant="h6" className={classes.title}>
              Expense Tracker App
            </Typography>
        </AppBar>
      </div>
    );
  }

export default Header

