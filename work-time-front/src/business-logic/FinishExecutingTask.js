import TaskService from "../API/TaskService";
import DurationService from "../API/DurationService";

const EMPLOYEE_ID = 1;

async function FinishExecuting(task) {
    await TaskService.update(task._links.self.href, {status: 'COMPLETED'});

    let duration = await DurationService.getByUserAndIsLast(EMPLOYEE_ID);

    const startTime = new Date(duration.startTime);
    const diff = Date.now() - startTime.getTime();
    const newTimeCount = duration.timeCount + diff;

    await DurationService.update(duration._links.self.href, {timeCount: newTimeCount,
                                taskUri : null});
}

export default FinishExecuting;