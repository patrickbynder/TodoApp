import { PayloadAction } from '@reduxjs/toolkit';
import { State } from '../../types';

export const todoIsFinished = {
    todoIsFinished: (
        state: State,
        action: PayloadAction<{ taskId: string; done: boolean }>
    ) => {
        state.tasks = state.tasks.map((task) => {
            if (task.id === action.payload.taskId) {
                return {
                    ...task,
                    done: action.payload.done,
                };
            }
            return task;
        });
    },
};
