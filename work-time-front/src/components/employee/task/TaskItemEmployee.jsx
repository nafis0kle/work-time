import React from 'react';
import MyButton from "../../UI/button/MyButton";

const TaskItemEmployee = (props) => {
    return (
        <div className="task">
            <div className="task__content">
                <strong>{props.task.title}</strong>
                <div>
                    Описание: {props.task.body}
                    <br/>
                    <br/>
                    Статус: {props.task.status}
                </div>
            </div>
            <div className="task__btns">
                <MyButton onClick={() => {
                    props.start(props.task);
                    props.setStartButton(true);
                }}>
                    Начать выполнение
                </MyButton>
            </div>
        </div>
    );
};

export default TaskItemEmployee;