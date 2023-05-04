import axios from "axios";

const Connection = async (username, password) => {
  const response = await axios.post(
    "http://localhost:3001/api/v1/user/login",
    {
      email: username,
      password: password,
    },

    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    },
  );
  return response.data.body.token;
}
const GetUser = async () => {

  const response = await axios.post(
    "http://localhost:3001/api/v1/user/profile",
    {},

    {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json;charset=utf-8",
      },
    },
  ).then(res => res.data.body);

  console.log(response)

  return response;
};

export { Connection, GetUser };
