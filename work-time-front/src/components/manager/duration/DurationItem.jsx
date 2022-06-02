import React from 'react';

const DurationItem = (props) => {
    function getTime(timeCount) {
        let hour = (timeCount / 1000 / 60 / 60) % 60;
        const hourPointIndex = hour.toString().indexOf('.')
        hour = hour.toString().substring(0,hourPointIndex);

        let minutes = (timeCount / 1000 / 60) % 60;
        const minutesPointIndex = minutes.toString().indexOf('.')
        minutes = minutes.toString().substring(0,minutesPointIndex);

        return "часы " + hour + " минуты " + minutes;
    }

    return (
        <div className="task">
            <div className="task__content">
                <div>
                    Дата : {(props.duration.workDate).toString().substring(0,10)}
                    <br/>
                    <br/>
                    Время работы: {getTime(props.duration.timeCount)}
                </div>
            </div>
        </div>
    );
};

export default DurationItem;