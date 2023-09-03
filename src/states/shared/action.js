import api from "../../utils/api";
import { hideLoading, showLoading } from 'react-redux-loading-bar'
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
    dispatch(showLoading())
    try {
      const [users, threads] = await asyncGetUsersAndThreads();
      dispatch(getUsersActionCreator(users));
      dispatch(getsThreadsActionCreator(threads));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading())
  };
};

export { getUsersAndThreads };
