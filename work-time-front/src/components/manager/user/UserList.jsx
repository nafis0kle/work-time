import React from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import UserItem from "./UserItem";

const UserList = ({users, remove, removeButton, setRemoveButton}) => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>Список</h1>
            <TransitionGroup>
                {users.map(user =>
                    <CSSTransition
                        key={user._links.self.href}
                        timeout={500}
                        classNames="user"
                    >
                        <UserItem remove={remove} user={user} removeButton={removeButton} setRemoveButton={setRemoveButton}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default UserList;