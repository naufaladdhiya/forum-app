import authedUserReducer from "./authedUser/reducer";
import leaderboardsReducer from "./leaderboard/reducer";
import threadsReducer from "./thread/reducer";
import usersReducer from "./users/reducer";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    authedUser: authedUserReducer,
    leaderboards: leaderboardsReducer,
    threads: threadsReducer,
    users: usersReducer,
  },
});

export default store;
