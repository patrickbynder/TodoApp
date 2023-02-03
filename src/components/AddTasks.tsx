import React, { useState } from 'react';
import { Button } from './Button';
import { StyledInput } from './StyledInput';

type Props = { onAdd: (value: string) => void };

function AddTasks({ onAdd }: Props) {
    const [title, setTitle] = useState('');

    const handleSubmit = () => {
        onAdd(title);
    };
    return (
        <div>
            <StyledInput
                placeholder="Add your Task"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Button onClick={handleSubmit}>Add Task</Button>
        </div>
    );
}

export default AddTasks;
