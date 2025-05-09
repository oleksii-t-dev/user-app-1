import { User } from "../models/User";

export const UserApi = {
  async fetchUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data.map((user) => new User(user));
  },
};
