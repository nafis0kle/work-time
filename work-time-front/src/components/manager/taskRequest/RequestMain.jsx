import React, {useEffect, useState} from 'react';
import '../../../styles/App.css';
import RequestList from "./RequestList";
import Header from "../Header";
import TaskService from "../../../API/TaskService";

const RequestMain = () =>  {
    const [tasks, setTasks] = useState([]);
    const [removeButton, setRemoveButton] = useState(false);

    useEffect(() => {
        fetchTasks();
    }, [removeButton])

    async function fetchTasks() {
        const tasks = await TaskService.getAllByStatus('RAW');
        setTasks(tasks);
    }

    const removeTask = async (task) => {
        await TaskService.remove(task._links.self.href);
        setRemoveButton(false);
    }

    const applyTask = async (task) => {
        const taskUri = task._links.self.href;
        const updateTask = {status : 'NEW'};

        await TaskService.update(taskUri, updateTask);
        setRemoveButton(false);
    }

    return (
        <div>
            <Header/>
            <RequestList apply={applyTask} remove={removeTask} tasks={tasks} removeButton={removeButton} setRemoveButton={setRemoveButton}/>
        </div>
    );
}

export default RequestMain;
