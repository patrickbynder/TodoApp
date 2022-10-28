import React, { useEffect, useState } from 'react';
import { HandleOnChange, Note, OnAddNote, Task } from '../types';
import AddNote from './AddNote';
import AddTasks from './AddTasks';
import Notes from './Notes';

type Props = {
    onDelete: (taskId: string) => void;
    onAddNote: OnAddNote;
    task: Task;
    handleOnChange: HandleOnChange;
};

export default function SingleTask({
    onAddNote,
    task,
    onDelete,
    handleOnChange,
}: Props) {
    const [showInput, setShowInput] = useState(false);
    const onClick = () => setShowInput(true);

    useEffect(() => {
        console.log({ task });
    }, [task]);

    return (
        <div key={task.id}>
            <h4>{task.title}</h4>
            <Notes notes={task.notes} />
            {showInput ? (
                <AddNote onAddNote={onAddNote} taskId={task.id} />
            ) : null}
            <p>{task.id}</p>

            <button onClick={() => onDelete(task.id)}>Delete Task</button>

            <button onClick={onClick}>Add Note</button>
            <input
                type="checkbox"
                checked={task.done}
                onChange={(event) => {
                    handleOnChange(!task.done, task.id);
                }}
            />
        </div>
    );
}
