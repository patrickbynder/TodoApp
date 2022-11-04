import React, { useEffect, useState } from 'react';
import { HandleOnChange, Note, OnAddNote, OnEditTitle, Task } from '../types';
import AddNote from './AddNote';
import AddTasks from './AddTasks';
import Notes from './Notes';

type Props = {
    onDelete: (taskId: string) => void;
    onAddNote: OnAddNote;
    task: Task;
    handleOnChange: HandleOnChange;
    OnEditTitle: OnEditTitle;
};

export default function SingleTask({
    onAddNote,
    task,
    onDelete,
    handleOnChange,
    OnEditTitle,
}: Props) {
    const [showInput, setShowInput] = useState(false);
    const [taskTitle, setTaskTitle] = useState(task.title);
    const onClick = () => setShowInput(true);

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            OnEditTitle(taskTitle, task.id);
        }
    };

    return (
        <div key={task.id}>
            <h4>{task.title}</h4>

            <span>Edit Task Name </span>
            <input
                placeholder={taskTitle}
                value={taskTitle}
                onChange={(event) => setTaskTitle(event.target.value)}
                onKeyDown={handleKeyDown}
            />

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
