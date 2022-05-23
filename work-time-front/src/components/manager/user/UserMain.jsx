import React, {useEffect, useState} from 'react';
import '../../../styles/App.css';
import UserList from "./UserList";
import SignUpUser from "./SignUpUser";
import Header from "../Header";
import UserService from "../../../API/UserService";
import MyButton from "../../UI/button/MyButton";
import MyModal from "../../UI/MyModal/MyModal";

const UserMain = (props) =>  {
    const [users, setUsers] = useState([]);
    const [modal, setModal] = useState(false);
    const [removeButton, setRemoveButton] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, [modal, removeButton])

    const signUpUser = async (newUser) => {
        await UserService.create(newUser);
        setModal(false);
    }

    async function fetchUsers() {
        const users = await UserService.getAllByRole(props.role);
        setUsers(users);
    }

    const removeUser = async (user) => {
        await UserService.remove(user._links.self.href);
        setRemoveButton(false);
    }

    return (
        <div>
            <Header/>
            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
                Добавить пользователя
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <SignUpUser create={signUpUser} role={props.role}/>
            </MyModal>
            <UserList remove={removeUser} users={users} removeButton={removeButton} setRemoveButton={setRemoveButton}/>
        </div>
    );
}

export default UserMain;
