import axios from "axios";

export default class UserService {
    static async getAllByRole(role) {
        const response = await axios.get("http://localhost:8080/users/search/findAllByRole?role=" + role);
        return response.data._embedded.users;
    }

    static async create(user) {
        await axios.post("http://localhost:8080/users", user);
    }

    static async remove(removedUserUri) {
        await axios.delete(removedUserUri);
    }
}