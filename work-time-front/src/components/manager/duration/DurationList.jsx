import React from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import DurationItem from "./DurationItem";

const DurationList = ({durations,employees}) => {

    return (
        <div>
            <h1 style={{textAlign: "center"}}>Сотрудник: Nafis</h1>
            <TransitionGroup>
                {durations.map(duration =>
                    <CSSTransition
                        key={duration._links.self.href}
                        timeout={500}
                        classNames="task"
                    >
                        <DurationItem duration={duration}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default DurationList;