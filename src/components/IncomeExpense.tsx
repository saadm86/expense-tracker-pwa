import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "5px",
    justifyItems: "center",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  title: {
    flexGrow: 1,
  },
}));


const IncomeExpense = () => {
    const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1} justify="center" alignItems="center">
        <Grid item sm={6}>
          <Paper className={classes.paper}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                Income
            </Typography>
            <Typography variant="h5" component="h2">
                PKR 0.00
            </Typography>
          </Paper>
        </Grid>
        <Grid item sm={6} justify="center" alignItems="center">
          <Paper className={classes.paper}>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
                Expenses
            </Typography>
            <Typography variant="h5" component="h2">
                PKR 0.00
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default IncomeExpense

