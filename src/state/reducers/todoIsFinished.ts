import { PayloadAction } from '@reduxjs/toolkit';
import { State } from '../../types';

export const todoIsFinished = {
    todoIsFinished: (
        state: State,
        action: PayloadAction<{ taskId: string; done: boolean }>
    ) => {
        state.tasks[action.payload.taskId].done = action.payload.done;
    },
};
