import React from 'react';
import TaskItemEmployee from "./TaskItemEmployee";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const TaskListEmployee = ({tasks, start, startButton, setStartButton}) => {
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
                        <TaskItemEmployee start={start} task={task} startButton={startButton} setStartButton={setStartButton}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default TaskListEmployee;