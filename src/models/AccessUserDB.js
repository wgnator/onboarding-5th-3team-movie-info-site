import { userDBService } from "../services/userDBService";
import { USERDB_BASE_URL } from "../const/consts";
import { saveToken } from "../utils/library";

export default class AccessUserDB {
  static getUsers = () => {
    return userDBService.get("");
  };

  static getUser = (id) => {
    return userDBService.get(`/${id}`);
  };

  static createUser = (data) => {
    return userDBService.post("", data);
  };

  static updateUser = (id, data) => {
    return userDBService.patch(id, data);
  };

  static deleteUser = (id) => {
    return userDBService.delete(id);
  };
}

export const getUsers = async () => {
  const response = await fetch(`${USERDB_BASE_URL}users`);
  const result = await response.json();
  return result;
};

export const checkExistEmail = async (email) => {
  const users = await getUsers();
  const exist = users.find((user) => user.email === email);
  return !!exist;
};

export const checkPassword = async (email, password) => {
  const users = await getUsers();
  const user = users.find((user) => user.email === email);
  return user.password === password;
};

const createUser = ({ id, email, password }) => ({
  id,
  email,
  password,
  watched: [],
  likes: [],
  favorites: [],
});

const createUserId = (users) => users.sort((a, b) => b.id - a.id)[0].id + 1;

const saveAccount = async (user) => {
  await fetch(`${USERDB_BASE_URL}users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("성공:", data);
    })
    .catch((error) => {
      console.error("실패:", error);
    });
};

export const createAccount = async ({ email, password }) => {
  const users = await getUsers();
  const id = createUserId(users);
  const user = createUser({ id, email, password });
  await saveAccount(user);
};

export const login = async (email) => {
  const users = await getUsers();
  const user = users.find((user) => user.email === email);
  saveToken(user);
  console.log("in login user", user);
  return user;
};
