import {useState} from "react";
import api from "../api/axios";

function Register({onSwitch}){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const register = async () =>{
        await api.post('/auth/register',{
            name,
            email,
            password    ,
        });
        onSwitch();
        alert('Registration successful! Please login.');
        console.log('User registered');
    };
    return(
        <div className="container">
            <h2>Register</h2>
            <input placeholder="Name" onChange={e=>setName(e.target.value)}/>
            <input placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
            <input type ="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
            <button onClick={register}>Register</button>
            <p onClick={onSwitch}>Already have an account? Login</p>
        </div>
    );
}

export default Register;
