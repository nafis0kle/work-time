import React, {useEffect, useState} from 'react';
import '../../../styles/App.css';
import TaskService from "../../../API/TaskService";
import Header from "../Header";
import MyButton from "../../UI/button/MyButton";
import MyModal from "../../UI/MyModal/MyModal";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import ProjectService from "../../../API/ProjectService";
import ProjectListDropdown from "../../employee/task/ProjectListDropdown";
import TypeService from "../../../API/TypeService";
import ProjectForm from "../project/ProjectForm";

function TaskMain() {
    const [tasks, setTasks] = useState([]);
    const [projects, setProjects] = useState([]);
    const [types, setTypes] = useState([]);
    const [taskModal, setTaskModal] = useState(false);
    const [projectModal, setProjectModal] = useState(false);
    const [removeButton, setRemoveButton] = useState(false);

    useEffect(() => {
        fetchTasks();
        fetchProjects();
        fetchTypes();
    }, [taskModal, removeButton, projectModal])

    const createTask = async (newTask) => {
        await TaskService.create(newTask);
        setTaskModal(false);
    }

    const createProject = async (newProject) => {
        await ProjectService.create(newProject);
        setProjectModal(false);
    }

    async function fetchTasks() {
        const statuses = ['NEW', 'RUNNING', 'COMPLETED'];
        const tasks = await TaskService.getAllByStatusIn(statuses);
        setTasks(tasks);
    }

    async function fetchProjects() {
        const projects = await ProjectService.getAll();
        setProjects(projects);
    }

    async function fetchTypes() {
        const types = await TypeService.getAll();
        setTypes(types);
    }

    const fetchTasksByProject = async (project) => {
        const tasks = await TaskService.getAllByProject(project);
        setTasks(tasks);
    }

    const removeTask = async (task) => {
        await TaskService.remove(task._links.self.href);
        setRemoveButton(false);
    }

  return (
    <div>
        <Header/>
        <ProjectListDropdown updateTasks={fetchTasksByProject} projects={projects}/>

        {/*Task modal*/}
        <MyButton style={{marginTop: 30}} onClick={() => setTaskModal(true)}>
            Добавить задачу
        </MyButton>
        <MyModal visible={taskModal} setVisible={setTaskModal}>
            <TaskForm create={createTask} projects={projects} types={types}/>
        </MyModal>

        {/*Project modal*/}
        <MyButton style={{marginTop: 30}} onClick={() => setProjectModal(true)}>
            Добавить проект
        </MyButton>
        <MyModal visible={projectModal} setVisible={setProjectModal}>
            <ProjectForm create={createProject}/>
        </MyModal>

        <TaskList remove={removeTask} tasks={tasks} removeButton={removeButton} setRemoveButton={setRemoveButton}/>
    </div>
  );
}

export default TaskMain;
