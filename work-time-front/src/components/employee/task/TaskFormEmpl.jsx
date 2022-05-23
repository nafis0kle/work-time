import React, {useState} from 'react';
import MyInput from "../../UI/input/MyInput";
import MyButton from "../../UI/button/MyButton";

const TaskFormEmpl = ({create}) => {
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
                <MyInput
                    value={task.category}
                    onChange={e => setTask({...task, category: e.target.value})}
                    type="text"
                    placeholder="Категория"
                />
                <MyButton onClick={addNewTask}>Отправить на утверждение менеджеру</MyButton>
            </form>
        </div>
    );
};

export default TaskFormEmpl;