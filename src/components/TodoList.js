import React from 'react';
import Task from './Task';
import store from '../store';
import { deleteTask } from '../actions/taskActions';

class TodoList extends React.Component {
  componentDidMount() {
    // TODO: Use `store.subscribe` to force an update when the state changes
    this.unsubcribe = store.subscribe(() => {
      this.forceUpdate();
    })
    // TODO: Name the subscription as `this.unsubscribe`
  }

  componentWillUnmount() {
    // TODO: Check if `this.unsubscribe` is defined
    if(this.unsubcribe) {
      this.unsubcribe();
    }
    // TODO: If its defined, invoke `this.unsubscribe`
  }

  deleteTask = (id) => {
    // TODO: Invoke `deleteTask` based on an `id` input
    store.dispatch(deleteTask(id));
    //       and dispatch a 'DELETE_TASK' action
  }

  render() {
    // TODO: Get the tasks stored in state with the `getState` method
    const tasksState = store.getState();
    // TODO: Use debugger to view state
    // debugger;
    // TODO: If there are no tasks stored in state, return `null`.
    if (!tasksState) return null

    return (
      <ul>
        {Object.values(tasksState).map(task => (
          <Task key={task.id} deleteTask={this.deleteTask} task={task} />
        ))}

      </ul>
    );
  }
}

export default TodoList;
