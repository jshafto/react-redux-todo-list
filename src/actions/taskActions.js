// TODO: Define `CREATE_TASK` constant
export const CREATE_TASK = 'CREATE_TASK';
// TODO: Define `DELETE_TASK` constant
export const DELETE_TASK = 'DELETE_TASK';
// TODO: Define `createTask` action creator function
export const createTask = (taskMessage) => {
    const taskId = new Date().getTime();
    debugger;
    return {
        type: CREATE_TASK,
        taskId,
        taskMessage,
    }

}
// TODO: Define `deleteTask` action creator function
export const deleteTask = (taskId) => ({
    type: DELETE_TASK,
    taskId
})
