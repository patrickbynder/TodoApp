import React, { useState } from 'react';
import { OnAddNote } from '../types';

type Props = {
    onAddNote: OnAddNote;
    taskId: string;
};

function AddNote({ onAddNote, taskId }: Props) {
    const [note, setNote] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        onAddNote(note, taskId);
        console.log(note);
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="Add your note"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                    />
                    <button> Add Note </button>
                </form>
            </div>
        </>
    );
}

export default AddNote;
