import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import RequestMain from "./components/manager/taskRequest/RequestMain";
import TaskMain from "./components/manager/task/TaskMain";
import UserMain from "./components/manager/user/UserMain";
import TaskMainEmployee from "./components/employee/task/TaskMainEmployee";
import ExecutingMain from "./components/employee/executing/ExecutingMain";
import DurationMain from "./components/manager/duration/DurationMain";

ReactDOM.render(
    <Router>
        <div>
            <Routes>
                <Route path="/manager" element={<TaskMain />} />
                <Route path="/manager/requests" element={<RequestMain />}/>
                <Route path="/manager/employees-list" element={<UserMain role={'EMPLOYEE'}/>} />
                <Route path="/manager/managers-list" element={<UserMain role={'MANAGER'}/>} />
                <Route path="/manager/durations" element={<DurationMain />} />

                <Route path="/employee" element={<TaskMainEmployee />} />
                <Route path="/employee/executing" element={<ExecutingMain />} />
            </Routes>
        </div>
    </Router>,

    document.getElementById('root')
);
