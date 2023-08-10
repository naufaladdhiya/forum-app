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

export { ActionTypes, getsThreadsActionCreator };
