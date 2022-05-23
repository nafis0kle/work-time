import React, {useEffect, useState} from 'react';
import '../../../styles/App.css';
import TaskService from "../../../API/TaskService";
import Header from "../Header";
import MyButton from "../../UI/button/MyButton";
import MyModal from "../../UI/MyModal/MyModal";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function TaskMain() {
    const [tasks, setTasks] = useState([]);
    const [modal, setModal] = useState(false);
    const [removeButton, setRemoveButton] = useState(false);

    useEffect(() => {
        fetchTasks();
    }, [modal, removeButton])

    const createTask = async (newTask) => {
        await TaskService.create(newTask);
        setModal(false);
    }

    async function fetchTasks() {
        const statuses = ['NEW', 'RUNNING', 'COMPLETED'];
        const tasks = await TaskService.getAllByStatusIn(statuses);
        setTasks(tasks);
    }

    const removeTask = async (task) => {
        await TaskService.remove(task._links.self.href);
        setRemoveButton(false);
    }

  return (
    <div>
        <Header/>
        <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
            Добавить задачу
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
            <TaskForm create={createTask}/>
        </MyModal>
        <TaskList remove={removeTask} tasks={tasks} removeButton={removeButton} setRemoveButton={setRemoveButton}/>
    </div>
  );
}

export default TaskMain;
