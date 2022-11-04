import React from 'react';
import { HandleOnChange, Note, OnEditTitle, OnAddNote, Task } from '../types';

import SingleTask from './SingleTask';

type Props = {
    tasks: Task[];
    onDelete: (value: string) => void;
    onAddNote: OnAddNote;
    handleOnChange: HandleOnChange;
    OnEditTitle: OnEditTitle;
};

function Todo({
    tasks,
    onAddNote,
    onDelete,
    handleOnChange,
    OnEditTitle,
}: Props) {
    return (
        <>
            {tasks.map((task) => (
                <SingleTask
                    key={task.id}
                    task={task}
                    onAddNote={onAddNote}
                    onDelete={onDelete}
                    handleOnChange={handleOnChange}
                    OnEditTitle={OnEditTitle}
                />
            ))}
        </>
    );
}

export default Todo;
