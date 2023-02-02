import { PayloadAction } from '@reduxjs/toolkit';
import { State } from '../../types';

export const taskIsDeleted = {
    taskIsDeleted: (
        state: State,
        action: PayloadAction<{ taskId: string }>
    ) => {
        state.tasks = state.tasks.filter(
            (task) => task.id !== action.payload.taskId
        );
    },
};
