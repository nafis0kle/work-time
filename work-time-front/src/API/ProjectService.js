import axios from "axios";

export default class ProjectService {
    static async getAll() {
        const response = await axios.get("http://localhost:8080/projects");
        return response.data._embedded.projects;
    }

    static async create(project) {
        await axios.post("http://localhost:8080/projects", project);
    }

    static async update(projectUri, updatedProject) {
        await axios.patch(projectUri, updatedProject);
    }

    static async remove(removedProjectUri) {
        await axios.delete(removedProjectUri);
    }
}