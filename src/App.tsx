import React from 'react';
import './App.css';
import AddTasks from './components/AddTasks';
import Todo from './components/Todo';
import { actions } from './state/slice';
import { useDispatch, useSelector } from './state/store';

function App() {
    const dispatch = useDispatch();
    function onAdd(title: string) {
        dispatch(actions.todoAdded(title));
    }

    function onAddNote(text: string, taskId: string) {
        dispatch(actions.noteAddedToTask({ text, taskId }));
    }

    function onDelete(id: string) {
        dispatch(actions.taskIsDeleted({ taskId: id }));
    }

    function handleOnChange(done: boolean, taskId: string) {
        dispatch(actions.todoIsFinished({ done, taskId }));
    }

    function OnEditTitle(editTitle: string, taskId: string) {
        dispatch(actions.taskNameEdited({ editTitle, taskId }));
    }

    return (
        <>
            <div>
                <h2>hello world</h2>
                <AddTasks onAdd={onAdd} />
                <Todo
                    onDelete={onDelete}
                    onAddNote={onAddNote}
                    handleOnChange={handleOnChange}
                    OnEditTitle={OnEditTitle}
                />
            </div>
        </>
    );
}

export default App;
