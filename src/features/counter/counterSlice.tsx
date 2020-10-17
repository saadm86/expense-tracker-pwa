import { createSlice } from '@reduxjs/toolkit';
// import {transactionList} from '../../app/TypescriptTypes'


export const transactionSlice = createSlice({

  name: 'transactions',
  initialState: [
    {amount: 500, desc: 'cash'},
    {amount: -40, desc: 'book'},
    {amount: -200, desc: 'camera'},
  ],
  reducers: {
    addTrans: (state, action) => {
      state.push(action.payload);
    },

    deleteTrans: (state, action) => {
      return(
        state.filter(key=>key.desc!== action.payload.desc)
      )
      
    },
  },
});

export const { addTrans, deleteTrans } = transactionSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value
export const selectTrans = state => state.counter;

export default transactionSlice.reducer;
