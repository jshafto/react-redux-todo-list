// TODO: Define `CREATE_TASK` constant
const CREATE_TASK = 'CREATE_TASK';
// TODO: Define `DELETE_TASK` constant
const DELETE_TASK = 'DELETE_TASK';
// TODO: Define `createTask` action creator function
const createTask = (taskMessage) => {
    const taskId = new Date().getTime();

    return {
        type: CREATE_TASK,
        taskId,
        taskMessage,
    }

}
// TODO: Define `deleteTask` action creator function
const deleteTask = (taskId) => ({
    type: DELETE_TASK,
    taskId
})
