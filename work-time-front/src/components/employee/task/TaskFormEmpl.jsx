import React, {useState} from 'react';
import MyInput from "../../UI/input/MyInput";
import MyButton from "../../UI/button/MyButton";
import {Dropdown} from "react-bootstrap";

const TaskFormEmpl = ({create, projects, types}) => {
    const [task, setTask] = useState({title: '',
        body: '',
        category: '',
        employee: ''});

    const addNewTask = (e) => {
        e.preventDefault()
        const newTask = {
            ...task, status: "RAW"
        }
        create(newTask)
        setTask({title: '',
            body: '',
            category: '',
            employee: ''})
    }

    return (
        <div>
            <h1 style={{textAlign: "center"}}>Создать новую задачу</h1>
            <form>
                {/*Управляемый компонент*/}
                <MyInput
                    value={task.title}
                    onChange={e => setTask({...task, title: e.target.value})}
                    type="text"
                    placeholder="Название задачи"
                />
                <MyInput
                    value={task.body}
                    onChange={e => setTask({...task, body: e.target.value})}
                    type="text"
                    placeholder="Описание задачи"
                />
                <br/>
                <Dropdown>
                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                        Выбрать проект
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {projects.map(project =>
                            <Dropdown.Item onClick={() => setTask({...task, project: project._links.self.href})}>{project.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <br/>
                <Dropdown>
                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                        Выбрать тип задачи
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {types.map(type =>
                            <Dropdown.Item onClick={() => setTask({...task, type: type._links.self.href})}>{type.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <br/>
                <MyButton onClick={addNewTask}>Отправить на утверждение менеджеру</MyButton>
            </form>
        </div>
    );
};

export default TaskFormEmpl;