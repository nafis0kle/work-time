import React, {useState} from 'react';
import MyInput from "../../UI/input/MyInput";
import MyButton from "../../UI/button/MyButton";

const TaskForm = ({create}) => {
    const [task, setTask] = useState({title: '',
        body: '',
        category: '',
        employee: ''});

    const addNewTask = (e) => {
        e.preventDefault()
        const newTask = {
            ...task, status: "NEW"
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
                <MyInput
                    value={task.category}
                    onChange={e => setTask({...task, category: e.target.value})}
                    type="text"
                    placeholder="Категория"
                />
                <MyInput
                    value={task.employee}
                    onChange={e => setTask({...task, employee: e.target.value})}
                    type="text"
                    placeholder="Сотрудник"
                />
                <MyButton onClick={addNewTask}>Создать задачу</MyButton>
            </form>
        </div>
    );
};

export default TaskForm;