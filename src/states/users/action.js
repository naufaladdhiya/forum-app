import api from "../../utils/api";

const ActionTypes = {
  GET_USERS: "GET_USERS",
};

const getUsersActionCreator = (users) => {
  return {
    type: ActionTypes.GET_USERS,
    payload: {
      users,
    },
  };
};

const registerUser = ({ name, email, password }) => {
  return async (dispatch) => {
    try {
      await api.register({ name, email, password });
    } catch (error) {
      alert(error.message);
    }
  };
};

export { ActionTypes, getUsersActionCreator, registerUser };
