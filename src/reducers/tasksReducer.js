// TODO: Import `CREATE_TASK` and `DELETE_TASK` string literal constants
import { CREATE_TASK, DELETE_TASK } from '../actions/taskActions'

const tasksReducer = (state = {}, action) => {
  // TODO: Freeze the state
  Object.freeze(state);
  // TODO: Define switch case for routing 'CREATE_TASK' actions and 'DELETE_TASK' actions
  const nextState = {...state};
  switch (action.type) {
    case CREATE_TASK:
      //debugger
      const newTask = {id: action.taskId, message: action.taskMessage};
      nextState[newTask.id] = newTask;
      return nextState;
    case DELETE_TASK:
      delete nextState[action.taskId];
      return nextState;
  }
};

export default tasksReducer;
