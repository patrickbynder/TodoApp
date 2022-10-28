import React from 'react';
import { Note } from '../types';

type Props = {
    notes: Note[];
};

function Notes({ notes }: Props) {
    return (
        <div>
            {notes.map((item) => (
                <div key={item.id}>
                    <p>{item.id}</p>
                    <p>{item.text}</p>
                </div>
            ))}
        </div>
    );
}

export default Notes;
