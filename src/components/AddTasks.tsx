import React, { useState } from 'react';

type Props = { onAdd: (value: string) => void };

function AddTasks({ onAdd }: Props) {
    const [title, setTitle] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        onAdd(title);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Add your Task"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button> Add Task </button>
            </form>
        </div>
    );
}

export default AddTasks;
