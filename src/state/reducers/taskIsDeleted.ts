import { PayloadAction } from '@reduxjs/toolkit';
import { State } from '../../types';

export const taskIsDeleted = {
    taskIsDeleted: (
        state: State,
        action: PayloadAction<{ taskId: string }>
    ) => {
        state.taskIds = state.taskIds.filter(
            (id) => id !== action.payload.taskId
        );
    },
};
