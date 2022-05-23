import React from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import RequestItem from "./RequestItem";

const RequestList = ({tasks, apply, remove, removeButton, setRemoveButton}) => {

    return (
        <div>
            <h1 style={{textAlign: "center"}}>Список запросов</h1>
            <TransitionGroup>
                {tasks.map(task =>
                    <CSSTransition
                        key={task._links.self.href}
                        timeout={500}
                        classNames="task"
                    >
                        <RequestItem apply={apply} remove={remove} task={task} removeButton={removeButton} setRemoveButton={setRemoveButton}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default RequestList;