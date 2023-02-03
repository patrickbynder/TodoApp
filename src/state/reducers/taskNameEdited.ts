import { PayloadAction } from '@reduxjs/toolkit';
import { State } from '../../types';

export const taskNameEdited = {
    taskNameEdited: (
        state: State,
        action: PayloadAction<{ taskId: string; editTitle: string }>
    ) => {
        state.tasks[action.payload.taskId].title = action.payload.editTitle;
    },
};
