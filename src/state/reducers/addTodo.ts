import { PayloadAction } from '@reduxjs/toolkit';
import { State } from '../../types';

export const addTodo = {
    addTodo: (state: State, action: PayloadAction<string>) => {
        state.addTodo = action.payload;
    },
};
