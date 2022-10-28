import React from 'react';
import './App.css';
import AddTasks from './components/AddTasks';
import Todo from './components/Todo';
import { useStore } from './state/useStore';

function App() {
    const { tasks, dispatch } = useStore();

    function onAdd(title: string) {
        dispatch({ type: 'ADD_TASK', payload: { title } });
    }

    function onAddNote(text: string, taskId: string) {
        dispatch({ type: 'ADD_NOTE', payload: { taskId, text } });
    }

    function onDelete(id: string) {
        dispatch({ type: 'DELETE_TASK', payload: { id } });
    }

    function handleOnChange(done: boolean, taskId: string) {
        dispatch({ type: 'CHANGE_FINISHED', payload: { done, taskId } });
    }

    return (
        <>
            <div>
                <h2>hello world</h2>
                <AddTasks onAdd={onAdd} />
                <Todo
                    tasks={tasks}
                    onDelete={onDelete}
                    onAddNote={onAddNote}
                    handleOnChange={handleOnChange}
                />
            </div>
        </>
    );
}

export default App;
