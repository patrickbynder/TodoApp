import React, { useState } from 'react';
import { Note } from '../types';

type Props = {
    onAddNote: (value: string) => void;
    notes: Note[];
};

function AddNote({ notes, onAddNote }: Props) {
    const [note, setNote] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        onAddNote(note);
        console.log(note);
    };

    return (
        <>
            {notes.map((item) => (
                <div key={item.id}>
                    <p>{item.id}</p>
                    <p>{item.text}</p>
                </div>
            ))}

            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="Add your note"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                    />
                    <button> Add Task </button>
                </form>
            </div>
        </>
    );
}

export default AddNote;
