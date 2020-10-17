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


const TransactionsList = () => {
    const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1} justify="center" alignItems="center">
        <Grid item xs={3} sm={3}>
          <Paper className={classes.paper}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                Transactions History
            </Typography>
            <Typography variant="h5" component="h2">
                History here
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default TransactionsList
