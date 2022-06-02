import React from 'react';
import {Dropdown} from "react-bootstrap";

const ProjectListDropdown = (props) => {
    return (
        <div>
            <Dropdown style={{textAlign: "center"}}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Выбрать проект
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {props.projects.map(project =>
                        <Dropdown.Item onClick={() => props.updateTasks(project._links.self.href)}>{project.name}</Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default ProjectListDropdown;