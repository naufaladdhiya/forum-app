import api from "../../utils/api";

const ActionTypes = {
  SET_AUTHED_USER: "SET_AUTHED_USER",
  UNSET_AUTHED_USER: "UNSET_AUTHED_USER",
};

const setAuthedUserActionCreator = (user) => {
  return {
    type: ActionTypes.SET_AUTHED_USER,
    payload: {
      user,
    },
  };
};

const unsetAuthedUserActionCreator = () => {
  return {
    type: ActionTypes.UNSET_AUTHED_USER,
  };
};

const asyncAuthedUserAndSetAccesToken = async ({ email, password }) => {
  const token = await api.login({ email, password });
  api.setAccessToken(token);
  return await api.getOwnProfile();
};

const setAuthUser = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const authedUser = await asyncAuthedUserAndSetAccesToken({
        email,
        password,
      });
      dispatch(setAuthedUserActionCreator(authedUser));
    } catch (error) {
      alert(error.message);
    }
  };
};

const unsetAuthUser = () => {
  return (dispatch) => {
    dispatch(unsetAuthedUserActionCreator());
    api.setAccessToken(null);
  };
};

export { ActionTypes, setAuthUser, unsetAuthUser, setAuthedUserActionCreator };
