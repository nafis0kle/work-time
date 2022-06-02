import DurationService from "../API/DurationService";

const EMPLOYEE_ID = 31;

async function FixExecuting() {
    let duration = await DurationService.getByUserAndIsLast(EMPLOYEE_ID);

    if (duration.taskUri !== null) {
        const workDate = new Date(duration.workDate);
        const  taskUri = duration.taskUri;

        if(workDate.getDay() === new Date().getDay()) {
            const startTime = new Date(duration.startTime);
            const diff = Date.now() - startTime.getTime();
            const newTimeCount = duration.timeCount + diff;

            await DurationService.update(duration._links.self.href, {timeCount: newTimeCount
                ,startTime : new Date()});

        } else {
            await DurationService.update(duration._links.self.href, {isLast: false});
            await DurationService.create({
                isLast: true, startTime: new Date(), employeeId: EMPLOYEE_ID
                , workDate: new Date(), timeCount: 0, taskUri :  taskUri
            });
        }
    }

    return duration;
}

export default FixExecuting;