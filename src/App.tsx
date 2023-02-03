import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import AddTasks from './components/AddTasks';
import { Container } from './components/Container';
import Header from './components/Header';
import Todo from './components/Todo';
import { actions } from './state/slice';
import { useDispatch } from './state/store';

const ThemeContext = createContext<string>('');

function App() {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
    };

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

    console.log(theme);

    return (
        <ThemeContext.Provider value="dark">
            <Container>
                <Header toggleTheme={toggleTheme} />
                <h2>hello world</h2>
                <AddTasks onAdd={onAdd} />
                <Todo
                    onDelete={onDelete}
                    onAddNote={onAddNote}
                    handleOnChange={handleOnChange}
                    OnEditTitle={OnEditTitle}
                />
            </Container>
        </ThemeContext.Provider>
    );
}

export default App;
