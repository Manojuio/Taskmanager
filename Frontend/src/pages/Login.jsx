import {useState} from 'react';
import api from '../api/axios';

function Login({ setToken, onSwitch }){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async ()=>{
        const reponse = await api.post('/auth/login',{
            email,
            password
        });
        setToken(reponse.data.token);
        alert('Login successful!');
        console.log('User logged in');
    }
    return(
        <div className='container'>
            <h2>Login</h2>
            <input placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
           
            <button onClick={login}>Login</button>
            <button onClick={onSwitch}>Switch to Register</button>
        </div>
    );
}

export default Login;