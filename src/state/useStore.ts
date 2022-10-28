import { Actions, State, Task } from '../types';
import { v4 as uuidv4 } from 'uuid';
import { useReducer } from 'react';

export function reducer(state: State, action: Actions): State {
    switch (action.type) {
        case 'ADD_TASK': {
            const id = uuidv4();
            return {
                ...state,
                tasks: [
                    ...state.tasks,

                    {
                        id: id,
                        title: action.payload.title,
                        notes: [],
                        done: false,
                    },
                ],
            };
        }

        case 'ADD_NOTE': {
            const id = uuidv4();
            return {
                ...state,
                tasks: state.tasks.map((task) => {
                    if (task.id === action.payload.taskId) {
                        const currentNotes = task.notes || [];
                        return {
                            ...task,
                            notes: [
                                ...currentNotes,
                                {
                                    id: id,
                                    text: action.payload.text,
                                },
                            ],
                        };
                    }
                    return task;
                }),
            };
        }

        case 'DELETE_TASK': {
            return {
                ...state,
                tasks: state.tasks.filter(
                    (task) => task.id !== action.payload.id
                ),
            };
        }

        case 'CHANGE_FINISHED': {
            return {
                ...state,
                tasks: state.tasks.map((task) => {
                    if (task.id === action.payload.taskId) {
                        return {
                            ...task,
                            done: action.payload.done,
                        };
                    }
                    return task;
                }),
            };
        }
    }
}

const initialState: State = {
    tasks: [],
};

export function useStore() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return { tasks: state.tasks, dispatch };
}
