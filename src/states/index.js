import authedUserReducer from "./authedUser/reducer";
import leaderboardsReducer from "./leaderboard/reducer";
import threadsReducer from "./thread/reducer";
import usersReducer from "./users/reducer";
import threadDetailReducer from "./threadsDetail/reducer";
import preloadReducer from "./preLoad/reducer";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    authedUser: authedUserReducer,
    leaderboards: leaderboardsReducer,
    threads: threadsReducer,
    users: usersReducer,
    threadDetail: threadDetailReducer,
    preload: preloadReducer,
  },
});

export default store;
