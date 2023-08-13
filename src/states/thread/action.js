import api from "../../utils/api";

const ActionTypes = {
  GET_THREAD: "GET_THREAD",
  CREATE_THREAD: "CREATE_THREAD",
};

const getsThreadsActionCreator = (threads) => {
  return {
    type: ActionTypes.GET_THREAD,
    payload: {
      threads,
    },
  };
};

const createThreadsActionCreator = (thread) => {
  return {
    type: ActionTypes.CREATE_THREAD,
    payload: {
      thread,
    },
  };
};

const createThread = ({ title, body, category }) => {
  return async (dispatch) => {
    try {
      const thread = await api.createThread({ title, body, category });
      dispatch(createThreadsActionCreator(thread));
    } catch (error) {
      alert(error.message);
    }
  };
};

export { ActionTypes, getsThreadsActionCreator, createThread };
