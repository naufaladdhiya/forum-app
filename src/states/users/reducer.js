import { ActionTypes } from "./action";

const usersReducer = (users = [], action = {}) => {
  switch (action.type) {
    case ActionTypes.GET_USERS:
      return action.payload.users;
    default:
      return users;
  }
};

export default usersReducer;
