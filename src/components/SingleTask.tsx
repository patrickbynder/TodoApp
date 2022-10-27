import React, { useState } from 'react';
import { Note, Task } from '../types';
import AddNote from './AddNote';

type Props = {
    notes: Note[];
    onDelete: (value: string) => void;
    onAddNote: (value: string) => void;
    item: any;
};

export default function SingleTask({
    // tasks,
    notes,
    onAddNote,
    item,
    onDelete,
}: Props) {
    const [showInput, setShowInput] = useState(false);
    const onClick = () => setShowInput(true);
    return (
        <div key={item.id}>
            <h4>{item.title}</h4>
            {showInput ? <AddNote notes={notes} onAddNote={onAddNote} /> : null}
            <p>{item.id}</p>

            <button onClick={() => onDelete(item.id)}>Delete Task</button>

            <button onClick={onClick}>Add Note</button>
        </div>
    );
}
