import React, {useEffect, useState} from 'react';
import '../../../styles/App.css';
import TaskService from "../../../API/TaskService";
import MyButton from "../../UI/button/MyButton";
import MyModal from "../../UI/MyModal/MyModal";
import HeaderEmployee from "../HeaderEmployee";
import TaskListEmployee from "./TaskListEmployee";
import TaskFormEmpl from "./TaskFormEmpl";
import startExecuting from "../../../business-logic/StartExecutingTask";
import {useNavigate} from "react-router-dom";
import ProjectListDropdown from "./ProjectListDropdown";
import ProjectService from "../../../API/ProjectService";
import TypeService from "../../../API/TypeService";

const TaskMainEmployee = (props) =>  {
    const [tasks, setTasks] = useState([]);
    const [projects, setProjects] = useState([]);
    const [types, setTypes] = useState([]);
    const [modal, setModal] = useState(false);
    const [startButton, setStartButton] = useState(false);
    const history = useNavigate();

    useEffect(() => {
        fetchTasks();
        fetchProjects();
        fetchTypes();
    }, [modal, startButton])

    const createTask = async (newTask) => {
        await TaskService.create(newTask);
        setModal(false);
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

    const startTask = async (task) => {
        await startExecuting(task);
        setStartButton(false);
        history("/employee/executing");
    }

    return (
        <div>
            <HeaderEmployee/>
            <ProjectListDropdown updateTasks={fetchTasksByProject} projects={projects}/>
            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
                Добавить задачу
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <TaskFormEmpl create={createTask} projects={projects} types={types}/>
            </MyModal>
            <TaskListEmployee start={startTask} tasks={tasks} startButton={startButton} setStartButton={setStartButton}/>
        </div>
    );
}

export default TaskMainEmployee;
