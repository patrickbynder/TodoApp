import React from 'react';
import { HandleOnChange, Note, OnAddNote, Task } from '../types';

import SingleTask from './SingleTask';

type Props = {
    tasks: Task[];
    onDelete: (value: string) => void;
    onAddNote: OnAddNote;
    handleOnChange: HandleOnChange;
};

function Todo({ tasks, onAddNote, onDelete, handleOnChange }: Props) {
    return (
        <>
            {tasks.map((task) => (
                <SingleTask
                    key={task.id}
                    task={task}
                    onAddNote={onAddNote}
                    onDelete={onDelete}
                    handleOnChange={handleOnChange}
                />
            ))}
        </>
    );
}

export default Todo;
