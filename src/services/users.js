import axios from "axios";

const ApiEndPoint = "https://reqres.in/";

export const fetchUsers = () => {
  return axios
    .get(ApiEndPoint + "api/users")
    .then((resp) => {
      return resp.data.data;
    })
    .catch((err) => {
      return err;
    });
};
