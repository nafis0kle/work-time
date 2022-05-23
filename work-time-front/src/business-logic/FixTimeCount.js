import DurationService from "../API/DurationService";

const EMPLOYEE_ID = 31;

async function FixExecuting() {
    let duration = await DurationService.getByUserAndIsLast(EMPLOYEE_ID);

    const startTime = new Date(duration.startTime);
    const diff = Date.now() - startTime.getTime();
    const newTimeCount = duration.timeCount + diff;

    await DurationService.update(duration._links.self.href, {timeCount: newTimeCount
                                    ,startTime : new Date()});

    return duration;
}

export default FixExecuting;