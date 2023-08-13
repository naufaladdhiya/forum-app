import api from "../../utils/api";
import { setAuthedUserActionCreator } from "../authedUser/action";

const ActionTypes = {
  SET_PRELOAD: "SET_PRELOAD",
};

const setPreloadActionCreator = (isPreload) => {
  return {
    type: ActionTypes.SET_PRELOAD,
    payload: {
      isPreload,
    },
  };
};

const setPreload = () => {
  return async (dispatch) => {
    try {
      const authedUser = await api.getOwnProfile();
      dispatch(setAuthedUserActionCreator(authedUser));
    } catch (error) {
      dispatch(setAuthedUserActionCreator(null));
    } finally {
      dispatch(setPreloadActionCreator(false));
    }
  };
};

export { ActionTypes, setPreload };
