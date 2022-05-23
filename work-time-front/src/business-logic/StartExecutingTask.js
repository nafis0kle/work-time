import TaskService from "../API/TaskService";
import DurationService from "../API/DurationService";

const EMPLOYEE_ID = 31;

async function startExecuting(task) {
    if (task.status === 'NEW') {
        await TaskService.update(task._links.self.href, {status: 'RUNNING', employeeId: EMPLOYEE_ID});
    }

    let duration = await DurationService.getByUserAndIsLast(EMPLOYEE_ID);

    if (duration === undefined) {
        duration = await DurationService.create({
            isLast: true, startTime: new Date(), employeeId: 31
            , workDate: new Date(), timeCount: 0, taskUri: task._links.self.href
        });
    }

    const workDate = new Date(duration.workDate);
    if(workDate.getDay() === new Date().getDay()) {
        await DurationService.update(duration._links.self.href, {startTime: new Date(),
                                        taskUri : task._links.self.href});

    } else {
        await DurationService.update(duration._links.self.href, {isLast: false});
        await DurationService.create({
            isLast: true, startTime: new Date(), employeeId: EMPLOYEE_ID
            , workDate: new Date(), timeCount: 0, taskUri :  task._links.self.href
        });
    }
}

export default startExecuting;