import axios from "axios";

export default class TypeService {
    static async getAll() {
        const response = await axios.get("http://localhost:8080/types");
        return response.data._embedded.types;
    }

    static async create(type) {
        await axios.post("http://localhost:8080/types", type);
    }

    static async update(typeUri, updatedType) {
        await axios.patch(typeUri, updatedType);
    }

    static async remove(removedTypeUri) {
        await axios.delete(removedTypeUri);
    }
}