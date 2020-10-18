import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { selectTrans } from '../features/counter/counterSlice';

const useStyles = makeStyles({
    root: {
      minWidth: 150,
      margin: "auto",
      marginTop: "5px",
      textAlign: 'center',
      opacity: '80%',
    },
    title: {
      fontSize: 14,
    },
  });

const Balance = () => {
    const classes = useStyles();
    const transList = useSelector(selectTrans)
    const amount = transList.map(key=>key.amount)
    const balance = amount.reduce((prev,next)=> (prev+=next),0).toFixed(2)
    
    return (
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            Your Balance is
          </Typography>
          <Typography variant="h5" component="h2">
            PKR {balance}
          </Typography>
        </CardContent>
      </Card>
    );
}

export default Balance
