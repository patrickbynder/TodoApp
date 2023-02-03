import { PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { State, Note } from '../../types';

interface NoteAddedPayload {
    text: string;
    taskId: string;
}

export const noteAddedToTask = {
    noteAddedToTask: (
        state: State,
        action: PayloadAction<NoteAddedPayload>
    ) => {
        const id = uuidv4();
        const newNote: Note = {
            id: id,
            text: action.payload.text,
        };
        state.tasks[action.payload.taskId].notes.push(newNote);
    },
};
