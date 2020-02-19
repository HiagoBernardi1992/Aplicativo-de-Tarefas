import { TaskModel } from '../models/task.model';
import { Action } from '@ngrx/store';

export enum ActionTypes {
    Add = 'ADD',
    Remove = 'REM',
    Update = 'UPD',
    Clear = 'CLE',
}

export const Add = (task: TaskModel) => {
    return <Action>{ type: ActionTypes.Add, payload: task };
}

export const Update = (task: TaskModel) => {
    return <Action>{ type: ActionTypes.Update, payload: task };
}

export const Remove = (task: TaskModel) => {
    return <Action>{ type: ActionTypes.Remove, payload: task };
}

export const Clear = () => {
    return <Action>{ type: ActionTypes.Clear, payload: null };
}