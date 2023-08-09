import { ActionTypes } from "./action";

const authedUserReducer = (authedUser = null, action = {}) => {
  switch (action.type) {
    case ActionTypes.SET_AUTHED_USER:
      return action.payload.user;
    case ActionTypes.UNSET_AUTHED_USER:
      return null;
    default:
      return authedUser;
  }
};

export default authedUserReducer;
