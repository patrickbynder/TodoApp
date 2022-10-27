import { Actions, State } from './types';
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
                    },
                ],
            };
        }

        case 'ADD_NOTE': {
            const id = uuidv4();
            return {
                ...state,
                notes: [
                    ...state.notes,
                    {
                        id: id,
                        text: action.payload.text,
                    },
                ],
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
    }
}

const initialState: State = {
    tasks: [],
    notes: [],
};

export function useStore() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return { tasks: state.tasks, notes: state.notes, dispatch };
}
