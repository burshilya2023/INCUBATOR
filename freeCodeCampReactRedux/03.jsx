// !30%
// Define action type
const ADD = 'ADD';

// Define action creator
const addMessage = (message) => {
  return {
    type: ADD,
    message
  };
};

// Define reducer
const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
};

// Create Redux store
const store = Redux.createStore(messageReducer);
