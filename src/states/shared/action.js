import api from "../../utils/api";

import { getUsersActionCreator } from "../users/action";
import { getsThreadsActionCreator } from "../thread/action";

const asyncGetUsersAndThreads = async () => {
  const [user, threads] = await Promise.all([
    api.getAllUsers(),
    api.getAllThreads(),
  ]);

  return [user, threads];
};

const getUsersAndThreads = () => {
  return async (dispatch) => {
    try {
      const [users, threads] = await asyncGetUsersAndThreads();
      dispatch(getUsersActionCreator(users));
      dispatch(getsThreadsActionCreator(threads));
    } catch (error) {
      alert(error.message);
    }
  };
};

export { getUsersAndThreads };
