import { noteAddedToTask } from './noteAddedToTask';
import { taskIsDeleted } from './taskIsDeleted';
import { taskNameEdited } from './taskNameEdited';
import { todoAdded } from './todoAdded';
import { todoIsFinished } from './todoIsFinished';

export const todoReducers = {
    ...todoAdded,
    ...noteAddedToTask,
    ...taskIsDeleted,
    ...todoIsFinished,
    ...taskNameEdited,
};
