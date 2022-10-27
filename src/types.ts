export interface Task {
    id: string;
    title: string;
    notes?: Note[];
}

export interface Note {
    id: string;
    text: string;
}

export interface LoginState {
    username: string;
    password: string;
    isLoading: boolean;
    error: string;
    isLoggedIn: boolean;
    variant: 'login' | 'forgetPassword';
}

export interface State {
    tasks: Task[];
    notes: Note[];
}

export type LoginAction =
    | { type: 'login' | 'succes' | 'error' | 'logOut' }
    | { type: 'field'; fieldName: string; payload: string };

export type Actions = AddTask | AddNotes | DeleteTask;

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
