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

        // state.tasks = state.tasks.map((task) => {
        //     if (task.id === action.payload.taskId) {
        //         const newNote: Note = {
        //             id: id,
        //             text: action.payload.text,
        //         };
        //         task.notes.push(newNote);
        //     }
        //     return task;
        // });
        // When newNote is called, a new note will be added to todo.
    },
};
