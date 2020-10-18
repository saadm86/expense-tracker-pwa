import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTrans, selectTrans } from '../features/counter/counterSlice';
import './Components.css'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    opacity: '80%',
  },
  paper: {
    padding: 'auto'
  }
}));


const TransactionsList = () => {
    const classes = useStyles();
    const transList = useSelector(selectTrans)
    const dispatch = useDispatch()

  return (
    <div className={classes.root}>
      <Grid container spacing={1} justify="center" alignItems="center">
        <Grid item sm={12}>
          
            <Typography color="textSecondary" gutterBottom>
                Transactions History
            </Typography>
         
            <Typography variant='caption'>
                <ul className="list">
                  <Paper className={classes.paper}>
                  {transList.map((key, id) => (
                    <Paper key={id}>
                    <li key={key.desc}>
                        {key.desc} <span>{key.amount}</span>
                        <button className="delete-btn" onClick={()=>dispatch(deleteTrans(key))}>x</button>
                    </li>
                    </Paper>
                  ))}
                  </Paper>
                </ul>
            </Typography>      
          
        </Grid>
      </Grid>
    </div>
  );
}

export default TransactionsList
