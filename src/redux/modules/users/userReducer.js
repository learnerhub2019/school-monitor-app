import {
  GET_USERS_SUCCESS,
  GET_USERS_FAILED,
  REQ_GET_USERS,
} from "./userAction";

const initialState = {
  data: null,
  fetching: false,
  message: null,
  error: null,
};

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQ_GET_USERS:
      return { ...state, fetching: true };

    case GET_USERS_SUCCESS:
      return { ...state, data: payload, fetching: false };

    case GET_USERS_FAILED:
      return { ...state, fetching: false, error: payload };

    default:
      return state;
  }
};

export default usersReducer;
