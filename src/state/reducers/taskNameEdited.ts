import { PayloadAction } from '@reduxjs/toolkit';
import { State } from '../../types';

export const taskNameEdited = {
    taskNameEdited: (
        state: State,
        action: PayloadAction<{ taskId: string; editTitle: string }>
    ) => {
        state.tasks = state.tasks.map((task) => {
            if (task.id === action.payload.taskId) {
                return {
                    ...task,
                    title: action.payload.editTitle,
                };
            }
            return task;
        });
    },
};
