export interface Task {
    id: string;
    title: string;
    done: boolean;
    notes: Note[];
}

export interface Note {
    id: string;
    text: string;
}

export interface State {
    tasks?: Task[];
    addTodo: string;
}

export type LoginAction =
    | { type: 'login' | 'succes' | 'error' | 'logOut' }
    | { type: 'field'; fieldName: string; payload: string };

export type Actions =
    | AddTask
    | AddNotes
    | DeleteTask
    | ChangeFinished
    | EditTask;

interface AddTask {
    type: 'ADD_TASK';
    payload: {
        title: string;
    };
}

interface AddNotes {
    type: 'ADD_NOTE';
    payload: {
        taskId: string;
        text: string;
    };
}

interface DeleteTask {
    type: 'DELETE_TASK';
    payload: {
        id: string;
    };
}

interface ChangeFinished {
    type: 'CHANGE_FINISHED';
    payload: {
        done: boolean;
        taskId: string;
    };
}

interface EditTask {
    type: 'EDIT_TASK';
    payload: {
        editTitle: string;
        taskId: string;
    };
}

export type OnAddNote = (value: string, taskId: string) => void;
export type HandleOnChange = (value: boolean, taskId: string) => void;
export type OnEditTitle = (value: string, taskID: string) => void;
