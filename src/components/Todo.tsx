import React, { useState } from 'react';
import { Note, Task } from '../types';
import AddNote from './AddNote';
import SingleTask from './SingleTask';

type Props = {
    tasks: Task[];
    notes: Note[];
    onDelete: (value: string) => void;
    onAddNote: (value: string) => void;
};

function Todo({ tasks, notes, onAddNote, onDelete }: Props) {
    return (
        <>
            {tasks.map((item) => (
                <SingleTask
                    notes={notes}
                    item={item}
                    onAddNote={onAddNote}
                    onDelete={onDelete}
                />
            ))}
        </>
    );
}

export default Todo;
