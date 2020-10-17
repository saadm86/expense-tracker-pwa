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
        margin: theme.spacing(2),
      },
    },
  }),
);

const AddTransaction = () => {
    const [amount, setAmount] = useState<any>()
    const [desc, setDesc] = useState<any>()
    const classes = useStyles();
    const dispatch = useDispatch()

    return (
      <form onSubmit={e=>e.preventDefault} className={classes.root} noValidate autoComplete="off">
        <TextField onChange={(e=>setDesc(e.target.value))} type="text" id="standard-basic" label="Enter Description" />

        <TextField onChange={(e=>setAmount(e.target.value))} type="number" id="standard-basic" label="Enter Amount" />
        <div>
            <Button onClick={()=>dispatch(addTrans({amount:+amount, desc}))} variant="contained" color="primary">
                Add
            </Button>
        </div>
      </form>
    );
}

export default AddTransaction
