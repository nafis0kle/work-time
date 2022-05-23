import React, {useState} from 'react';
import MyInput from "../../UI/input/MyInput";
import MyButton from "../../UI/button/MyButton";

const SignUpUser = (props) => {
    const [user, setUser] = useState({name: '', password: ''});

    const addNewUser = (e) => {
        e.preventDefault()

        const newUser = {
            ...user, role: props.role
        }

        props.create(newUser)
        setUser({name: '',
            password: ''})
    }

    return (
        <div>
            <h1 style={{textAlign: "center"}}>Регистрация</h1>
            <form>
                {/*Управляемый компонент*/}
                <MyInput
                    value={user.name}
                    onChange={e => setUser({...user, name: e.target.value})}
                    type="text"
                    placeholder="Имя"
                />
                <MyInput
                    value={user.password}
                    onChange={e => setUser({...user, password: e.target.value})}
                    type="text"
                    placeholder="Пароль"
                />
                <MyButton onClick={addNewUser}>Зарегистрировать</MyButton>
            </form>
        </div>
    );
};

export default SignUpUser;