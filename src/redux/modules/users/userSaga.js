import { takeEvery, call, put } from "redux-saga/effects";
import { fetchUsers } from "../../../services/users";
// import
import { getUsersFailed, REQ_GET_USERS, getUsersSuccess } from "./userAction";

function* watchFetchUsers() {
  yield takeEvery(REQ_GET_USERS, loadUsers);
}

function* loadUsers() {
  try {
    const users = yield call(fetchUsers, []);
    console.log(users);
    yield put(getUsersSuccess(users));
  } catch (err) {
    console.dir(err);
    yield put(getUsersFailed(err.message));
  }
}

const userSaga = [watchFetchUsers];
export default userSaga;
