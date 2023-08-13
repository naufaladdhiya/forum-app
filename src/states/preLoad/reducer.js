import { ActionTypes } from "./action";

function preloadReducer(preload = true, action = {}) {
  switch (action.type) {
    case ActionTypes.SET_PRELOAD:
      return action.payload.isPreload;
    default:
      return preload;
  }
}

export default preloadReducer;
