import { ActionTypes } from "./action";

const threadsReducer = (threads = [], action = {}) => {
  switch (action.type) {
    case ActionTypes.GET_THREAD:
      return action.payload.threads;
    default:
      return threads;
  }
};

export default threadsReducer;
