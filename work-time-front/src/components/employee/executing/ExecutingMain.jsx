import React from 'react';
import HeaderEmployee from "../HeaderEmployee";
import MyButton from "../../UI/button/MyButton";
import TaskService from "../../../API/TaskService";
import FixTimeCount from "../../../business-logic/FixTimeCount";
import {useEffect, useState} from "react";
import FinishExecutingTask from "../../../business-logic/FinishExecutingTask";
import {useNavigate} from "react-router-dom";

const ExecutingMain = () => {
    const [task, setTask] = useState([]);
    const [duration, setDuration] = useState([]);
    const history = useNavigate();

    useEffect(() => {
        start();
    }, [])

    async function start() {
        const duration = await FixTimeCount();
        setDuration(duration);
        const task = await TaskService.get(duration.taskUri);
        setTask(task);
    }

    function getTime(timeCount) {
        let hour = (timeCount / 1000 / 60 / 60);
        const hourPointIndex = hour.toString().indexOf('.')
        hour = hour.toString().substring(0,hourPointIndex);

        let minutes = timeCount / 1000 / 60;
        const minutesPointIndex = minutes.toString().indexOf('.')
        minutes = minutes.toString().substring(0,minutesPointIndex);

        return hour + "." + minutes;
    }

    return (
        <div>
            <HeaderEmployee/>
            <strong>Время работы: {getTime(duration.timeCount)} </strong>
            <div className="task">
                <div className="task__content">
                    <strong>{task.title}</strong>
                    <div>
                        Описание: {task.body}
                        <br/>
                        <br/>
                        Статус: {task.status}
                    </div>
                </div>
                <div className="task__btns">
                    <MyButton onClick={() => {
                        FinishExecutingTask(task);
                        history("/employee");
                    }}>
                        Завершить выполнение
                    </MyButton>
                </div>
            </div>
        </div>
    );
};

export default ExecutingMain;