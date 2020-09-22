const STATE_KEY = 'tasks';

export const loadState = () => {
  try {
    // TODO: Try to access the stored tasks state from local storage
    const stateJSON = localStorage.getItem(STATE_KEY)
    // TODO: If there is no state found, return `undefined`
    if (stateJSON === null) return undefined;
    // TODO: If the state was found, return the state (parsed into JavaScript)
    return JSON.parse(stateJSON)
  } catch (error) {
    // TODO: Catch any errors with a `console.warn` statement and return undefined
    console.warn(error);
    return undefined;
  }

};

export const saveState = (state) => {
  try {
    // TODO: Try to parse the state from JavaScript into a JSON string
    const stateJSON = JSON.stringify(state);
    // TODO: Set the JSON string into local storage
    localStorage.setItem(STATE_KEY, stateJSON);

  } catch (error) {
    // TODO: Catch any errors with a `console.warn` statement
    console.warn(error);
    return undefined;
  }

};
