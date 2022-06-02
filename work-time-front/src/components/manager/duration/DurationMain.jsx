import React, {useEffect, useState} from 'react';
import '../../../styles/App.css';
import Header from "../Header";
import DurationService from "../../../API/DurationService";
import UserService from "../../../API/UserService";
import EmployeeDurationList from "./EmployeeDurationList";
import DurationList from "./DurationList";

const DurationMain = (props) =>  {
    const [durations, setDurations] = useState([]);
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetchDurations();
        fetchEmployees();
    }, [])

    async function fetchDurations() {
        const durations = await DurationService.getAll();
        setDurations(durations);
    }

    async function fetchEmployees() {
        const employees = await UserService.getAllByRole({role : 'EMPLOYEE'});
        setEmployees(employees);
    }

    return (
        <div>
            <Header />
            <DurationList employees={employees} durations={durations} />
        </div>
    );
}

export default DurationMain;
