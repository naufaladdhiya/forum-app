import { hideLoading, showLoading } from "react-redux-loading-bar";
import api from "../../utils/api";

const ActionTypes = {
  GET_LEADERBOARD: "GET_LEADERBOARD",
};

const getLeaderboardsActionCreater = (leaderboards) => {
  return {
    type: ActionTypes.GET_LEADERBOARD,
    payload: {
      leaderboards,
    },
  };
};

const getLeaderboards = () => {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const leaderboards = await api.getLeaderboards();
      dispatch(getLeaderboardsActionCreater(leaderboards));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
};

export { ActionTypes, getLeaderboards };
