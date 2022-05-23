import React from 'react';
import TaskItem from "./TaskItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const TaskList = ({tasks, remove, removeButton, setRemoveButton}) => {

    return (
        <div>
            <h1 style={{textAlign: "center"}}>Список задач</h1>
            <TransitionGroup>
                {tasks.map(task =>
                    <CSSTransition
                        key={task._links.self.href}
                        timeout={500}
                        classNames="task"
                    >
                    <TaskItem remove={remove} task={task} removeButton={removeButton} setRemoveButton={setRemoveButton}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default TaskList;