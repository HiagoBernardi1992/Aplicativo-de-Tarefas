import { TasksModel } from '../models/tasks.model';
import { ActionModel } from '../models/action.model';
import { ActionTypes } from '../actions/tasks.action';

export const tasks = new TasksModel();

export function taskReducer(state = tasks, action: ActionModel) {
    switch (action.type) {
        case ActionTypes.Add:
            {
                state.tasks.push(action.payload);

                console.log(state);
                return state;
            };

        case ActionTypes.Update:
            {
                const index = state.tasks.indexOf(action.payload);
                state.tasks.splice(index, 1);
                state.tasks.push(action.payload);
                console.log(state);
                return state;
            }

        case ActionTypes.Remove:
            {
                const index = state.tasks.indexOf(action.payload);
                state.tasks.splice(index, 1);

                console.log(state);
                return state;
            };

        case ActionTypes.Clear:
            {
                state = new TasksModel();
                console.log(state);
                return state;
            }

        default:
            return state;
    }


}