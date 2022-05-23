import React, {useEffect, useState} from 'react';
import '../../../styles/App.css';
import TaskService from "../../../API/TaskService";
import MyButton from "../../UI/button/MyButton";
import MyModal from "../../UI/MyModal/MyModal";
import HeaderEmployee from "../HeaderEmployee";
import TaskListEmployee from "./TaskListEmployee";
import TaskFormEmpl from "./TaskFormEmpl";
import startExecuting from "../../../business-logic/StartExecutingTask";
import {useNavigate } from "react-router-dom";

const TaskMainEmployee = (props) =>  {
    const [tasks, setTasks] = useState([]);
    const [modal, setModal] = useState(false);
    const [startButton, setStartButton] = useState(false);
    const history = useNavigate();

    useEffect(() => {
        fetchTasks();
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

    const startTask = async (task) => {
        await startExecuting(task);
        setStartButton(false);
        history("/employee/executing");
    }

    return (
        <div>
            <HeaderEmployee/>
            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
                Добавить задачу
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <TaskFormEmpl create={createTask}/>
            </MyModal>
            <TaskListEmployee start={startTask} tasks={tasks} startButton={startButton} setStartButton={setStartButton}/>
        </div>
    );
}

export default TaskMainEmployee;
