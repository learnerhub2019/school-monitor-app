import { all } from "redux-saga/effects";
import userSaga from "../redux/modules/users/userSaga";
// import

export default function* rootSaga() {
  yield all([...userSaga].map( fn => fn()));
}
