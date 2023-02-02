import { PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { State, Task } from '../../types';

export const todoAdded = {
    todoAdded: (state: State, action: PayloadAction<string>) => {
        const id = uuidv4();
        const newTask: Task = {
            id: id,
            title: action.payload,
            notes: [],
            done: false,
        };
        // When addtodo is called, a new todo will be added to tasks.
        state.tasks.push(newTask);
    },
};
