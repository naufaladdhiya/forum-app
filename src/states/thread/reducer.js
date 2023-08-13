import { ActionTypes } from "./action";

const threadsReducer = (threads = [], action = {}) => {
  switch (action.type) {
    case ActionTypes.GET_THREAD:
      return action.payload.threads;
    case ActionTypes.CREATE_THREAD:
      return [...threads, action.payload.thread];
    default:
      return threads;
  }
};

export default threadsReducer;
