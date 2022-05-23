import React from 'react';
import MyButton from "../../UI/button/MyButton";

const RequestItem = (props) => {
    return (
        <div className="task">
            <div className="task__content">
                <strong>{props.task.title}</strong>
                <div>
                    Описание: {props.task.body}
                </div>
            </div>
            <div className="task__btns">
                <MyButton onClick={() => {
                    props.remove(props.task);
                    props.setRemoveButton(true);
                }}>
                    Отказать
                </MyButton>
                <MyButton onClick={() => {
                    props.apply(props.task);
                    props.setRemoveButton(true);
                }}>
                    Утвердить
                </MyButton>
            </div>
        </div>
    );
};

export default RequestItem;