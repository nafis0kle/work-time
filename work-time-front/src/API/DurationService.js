import axios from "axios";

export default class DurationService {
    static async getAll() {
        const response = await axios.get("http://localhost:8080/durations");
        return response.data._embedded.durations;
    }

    static async getByUserAndIsLast(userId) {
        return (await axios.get("http://localhost:8080/durations/search/findByIsLast?isLast=true")).data;
    }

    static async create(duration) {
        await axios.post("http://localhost:8080/durations", duration);
    }

    static async update(durationUri, updatedDuration) {
        await axios.patch(durationUri, updatedDuration);
    }

    static async remove(removedTaskUri) {
        await axios.delete(removedTaskUri);
    }
}