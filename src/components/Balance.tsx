import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 150,
      margin: "auto",
      marginTop: "10px"
    },
    title: {
      fontSize: 14,
    },
  });

const Balance = () => {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            Your Balance is
          </Typography>
          <Typography variant="h5" component="h2">
            PKR 0.00
          </Typography>
        </CardContent>
      </Card>
    );
}

export default Balance
