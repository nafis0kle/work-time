import axios from "axios";

export default class TaskService {
    static async get(taskUri) {
        return (await axios.get(taskUri)).data;
    }

    static async getAll() {
        const response = await axios.get("http://localhost:8080/tasks");
        return response.data._embedded.tasks;
    }

    static async getAllByStatus(status) {
        const response = await axios.get("http://localhost:8080/tasks/search/findAllByStatus?status=" + status);
        return response.data._embedded.tasks;
    }

    static async getAllByProject(project) {
        const response = await axios.get("http://localhost:8080/tasks/search/findAllByProject?project=" + project);
        return response.data._embedded.tasks;
    }

    static async getAllByStatusIn(statuses) {
        const response = await axios.get("http://localhost:8080/tasks/search/findAllByStatusIn?statuses=" + statuses);
        return response.data._embedded.tasks;
    }

    static async create(task) {
        await axios.post("http://localhost:8080/tasks", task);
    }

    static async update(taskUri, updatedTask) {
        await axios.patch(taskUri, updatedTask);
    }

    static async remove(removedTaskUri) {
        await axios.delete(removedTaskUri);
    }
}