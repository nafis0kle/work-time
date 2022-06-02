import React, {useState} from 'react';
import MyInput from "../../UI/input/MyInput";
import MyButton from "../../UI/button/MyButton";

const ProjectForm = ({create}) => {
    const [project, setProject] = useState({name: ''});

    const addNewProject = (e) => {
        e.preventDefault()
        const newProject = {
            ...project
        }
        create(newProject)
        setProject({name: ''})
    }

    return (
        <div>
            <h1 style={{textAlign: "center"}}>Добавить новый проект</h1>
            <form>
                {/*Управляемый компонент*/}
                <MyInput
                    value={project.name}
                    onChange={e => setProject({...project, name: e.target.value})}
                    type="text"
                    placeholder="Название проекта"
                />
                <br/>
                <MyButton onClick={addNewProject}>Добавить проект</MyButton>
            </form>
        </div>
    );
};

export default ProjectForm;