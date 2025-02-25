'use client'

import react  from 'react';
import { useRef } from 'react';
const Login = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();
    return (
        <form> 
            <input ref={usernameRef} type="text" placeholder="Username" />
            <input ref={passwordRef} type="password" placeholder="Password" />
            <input type="submit" value="Login" onClick={e=>{
                e.preventDefault();
                if(usernameRef.current.value === "admin" && passwordRef.current.value === "admin"){
                    alert("Login Successful");
                }
                else{
                    alert("Login Failed");
                }
            }}/>    
        </form>
    );
}

export default Login;