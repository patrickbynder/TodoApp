import React from 'react';
import './App.css';
import AddTasks from './components/AddTasks';
import Todo from './components/Todo';
import { actions } from './state/slice';
import { useDispatch, useSelector } from './state/store';

function App() {
    const { tasks } = useSelector((state) => state.todoapp);
    const dispatch = useDispatch();
    //const { tasks, dispatch } = useStore();
    console.log('hello');
    function onAdd(title: string) {
        // dispatch({ type: 'ADD_TASK', payload: { title } });
        dispatch(actions.todoAdded(title));
    }

    function onAddNote(text: string, taskId: string) {
        dispatch(actions.noteAddedToTask({ text, taskId }));
    }

    function onDelete(id: string) {
        //dispatch({ type: 'DELETE_TASK', payload: { id } });
        dispatch(actions.taskIsDeleted({ taskId: id }));
    }

    function handleOnChange(done: boolean, taskId: string) {
        //dispatch({ type: 'CHANGE_FINISHED', payload: { done, taskId } });
        dispatch(actions.todoIsFinished({ done, taskId }));
    }

    function OnEditTitle(editTitle: string, taskId: string) {
        //dispatch({ type: 'EDIT_TASK', payload: { editTitle, taskId } });
        dispatch(actions.taskNameEdited({ editTitle, taskId }));
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
                    OnEditTitle={OnEditTitle}
                />
            </div>
        </>
    );
}

export default App;
