import { combineReducers } from "@reduxjs/toolkit";
import usersReducer from "../redux/modules/users/userReducer";

export default combineReducers({
    users: usersReducer
})