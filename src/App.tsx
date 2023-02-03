import React, { useEffect, useContext } from 'react';
import './App.css';
import AddTasks from './components/AddTasks';
import { Container } from './components/Container';
import Header from './components/Header';
import Todo from './components/Todo';
import { actions } from './state/slice';
import { useDispatch } from './state/store';
import { ThemeContext } from './themeProvider';

function App() {
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

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
        <Container>
            <h2>test</h2>
            <Header />
            <h1>
                Manage everything you need <span>ToDo</span>
            </h1>
            <AddTasks onAdd={onAdd} />
            <Todo
                onDelete={onDelete}
                onAddNote={onAddNote}
                handleOnChange={handleOnChange}
                OnEditTitle={OnEditTitle}
            />
        </Container>
    );
}

export default App;
