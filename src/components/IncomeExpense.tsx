import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { selectTrans } from '../features/counter/counterSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "5px",
    justifyItems: "center",
    opacity: '80%',
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

    const transList = useSelector(selectTrans)
    const income = transList.filter(key=>key.amount>0).map(key=>key.amount).reduce((prev,next)=>(prev+=next),0).toFixed(2)
    const expenses = transList.filter(key=>key.amount<0).map(key=>key.amount).reduce((prev,next)=>(prev+=next),0).toFixed(2)

  return (
    <div className={classes.root}>
      <Grid container spacing={1} justify="center" alignItems="center">
        <Grid item sm={6}>
          <Paper className={classes.paper}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                Income
            </Typography>
            <Typography variant="h5" component="h2">
                PKR {income}
            </Typography>
          </Paper>
        </Grid>
        <Grid item sm={6}>
          <Paper className={classes.paper}>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
                Expenses
            </Typography>
            <Typography variant="h5" component="h2">
                PKR {+expenses>0 ? -expenses : expenses}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default IncomeExpense

