import React from 'react';
import MyButton from "../../UI/button/MyButton";

const UserItem = (props) => {
    return (
        <div className="user">
            <div className="user__content">
                <strong>{props.user.name}</strong>
                <div>
                    Пароль: {props.user.password}
                </div>
            </div>
            <div className="user__btns">
                <MyButton onClick={() => {
                    props.remove(props.user);
                    props.setRemoveButton(true);
                }}>
                    Удалить
                </MyButton>
            </div>
        </div>
    );
};

export default UserItem;