import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

const AddTransaction = () => {
    const classes = useStyles();

    return (
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Enter Description" />

        <TextField id="standard-basic" label="Enter Amount" />
        <div>
            <Button variant="contained" color="primary">
                Add
            </Button>
        </div>
      </form>
    );
}

export default AddTransaction
