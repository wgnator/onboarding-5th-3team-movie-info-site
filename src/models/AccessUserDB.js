import { userDBService } from "../services/userDBService";

export default class AccessUserDB {
  static getUsers = () => {
    return userDBService.get("/");
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
