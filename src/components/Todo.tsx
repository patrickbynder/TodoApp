import React from 'react';
import { useSelector } from '../state/store';
import { HandleOnChange, OnEditTitle, OnAddNote } from '../types';

import SingleTask from './SingleTask';

type Props = {
    onDelete: (value: string) => void;
    onAddNote: OnAddNote;
    handleOnChange: HandleOnChange;
    OnEditTitle: OnEditTitle;
};

function Todo({ onAddNote, onDelete, handleOnChange, OnEditTitle }: Props) {
    const { tasks, taskIds } = useSelector((state) => state.todoapp);
    return (
        <>
            {taskIds.map((taskId) => (
                <SingleTask
                    key={taskId}
                    task={tasks[taskId]}
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
