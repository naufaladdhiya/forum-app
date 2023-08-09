import authedUserReducer from "./authedUser/reducer";
import leaderboardsReducer from "./leaderboard/reducer";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    authedUser: authedUserReducer,
    leaderboards: leaderboardsReducer,
  },
});

export default store;
