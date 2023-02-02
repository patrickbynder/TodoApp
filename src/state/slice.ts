import { createSlice } from '@reduxjs/toolkit';
import { State } from '../types';
import { todoReducers } from './reducers';

const initialState: State = {
    tasks: [],
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        ...todoReducers,
    },
});

// Action creators are generated for each case reducer function

export default todoSlice.reducer;
export const { actions } = todoSlice;
