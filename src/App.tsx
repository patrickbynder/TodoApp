import React from 'react';
import './App.css';
import AddTasks from './components/AddTasks';
import Todo from './components/Todo';
import { useStore } from './useStore';

function App() {
    const { tasks, notes, dispatch } = useStore();

    function onAdd(title: string) {
        dispatch({ type: 'ADD_TASK', payload: { title } });
    }

    function onAddNote(text: string) {
        dispatch({ type: 'ADD_NOTE', payload: { taskId: '', text } });
    }

    function onDelete(id: string) {
        dispatch({ type: 'DELETE_TASK', payload: { id } });
    }

    return (
        <>
            <div>
                <h2>hello world</h2>
                <AddTasks onAdd={onAdd} />
                <Todo
                    tasks={tasks}
                    notes={notes}
                    onDelete={onDelete}
                    onAddNote={onAddNote}
                />
            </div>
        </>
    );
}

export default App;
