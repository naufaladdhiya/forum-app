import { ActionTypes } from "./action";

const leaderboardsReducer = (leaderboards = [], action = {}) => {
  switch (action.type) {
    case ActionTypes.GET_LEADERBOARD:
      return action.payload.leaderboards;
    default:
      return leaderboards;
  }
};

export default leaderboardsReducer;
