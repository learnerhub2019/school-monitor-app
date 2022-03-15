export const REQ_GET_USERS = "reqGetUsers";
export const GET_USERS = "getUsers";
export const GET_USERS_SUCCESS = "getUsersSuccess";
export const GET_USERS_FAILED = "getUsersFailed";

export const GET_USER = "getUser";

export const requestUsers = () => ({
  type: REQ_GET_USERS,
});
export const getUsersSuccess = (users) => ({
  type: GET_USERS_SUCCESS,
  payload: users,
});

export const getUsersFailed = (err) => ({
  type: GET_USERS_FAILED,
  payload: err,
});

export const dispatchActionEvent = (type, payload) => ({
  type,
  payload,
});
