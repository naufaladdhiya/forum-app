import authedUserReducer from "./authedUser/reducer";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    authedUser: authedUserReducer,
  },
});

export default store;
