import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTrans, selectTrans } from '../features/counter/counterSlice';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyItems: "center",
    textAlign: 'center',
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


const TransactionsList = () => {
    const classes = useStyles();
    const transList = useSelector(selectTrans)
    const dispatch = useDispatch()

  return (
    <div className={classes.root}>
      <Grid container spacing={1} justify="center" alignItems="center">
        <Grid item sm={12}>
          <Paper className={classes.paper}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                Transactions History
            </Typography>
            <Typography variant="h5" component="h2">
                <ul>
                  {transList.map((key, id) => (
                    <li key={key.desc}>
                        {key.desc} <span>{key.amount}</span>
                        <button onClick={()=>dispatch(deleteTrans(key))}>x</button>
                    </li>
                  ))}
                </ul>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default TransactionsList
