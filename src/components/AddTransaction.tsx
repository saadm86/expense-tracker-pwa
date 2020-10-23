import React, {useState} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useDispatch} from 'react-redux'
import {addTrans} from '../features/counter/counterSlice'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        opacity: '90%',
    textAlign: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

const AddTransaction = () => {
    const [amount, setAmount] = useState<any>()
    const [desc, setDesc] = useState<any>()
    const classes = useStyles();
    const dispatch = useDispatch()

    const addHandle = () => {
      if (amount===undefined || desc === undefined) {
        alert("Amount and Description cannot be empty")
      } else {
        dispatch(addTrans({amount:+amount, desc}))
      }
    }

    return (
      <form className={classes.root} noValidate autoComplete="off">
        <TextField onFocus={(e) => e.target.value === null} onChange={(e=>setDesc(e.target.value))} type="text" id="Description" label="Enter Description" />

        <TextField onChange={(e=>setAmount(e.target.value))} type="number" id="amount" label="Enter Amount" />
        
        <div>    
          <Button fullWidth={true} size="small" onClick={addHandle} variant="contained" color="secondary">
              Add Transaction
          </Button>
        </div>

      </form>
    );
}

export default AddTransaction
