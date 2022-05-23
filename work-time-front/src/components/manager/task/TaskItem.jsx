import React from 'react';
import MyButton from "../../UI/button/MyButton";

const TaskItem = (props) => {
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
                    props.remove(props.task);
                    props.setRemoveButton(true);
                }}>
                    Удалить
                </MyButton>
            </div>
        </div>
    );
};

export default TaskItem;