import React from 'react'
import { useState, useRef } from 'react'
import "../UserRegister/UserRegister.css"

const UserLogin = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <section className="register-container">
            <h1>Login</h1>
            <form>
                <label for="username">Username: </label> 
                
                <input 
                    ref={usernameRef}
                    type="text" 
                    id="enter-username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    autoComplete="off"
                    spellCheck="false"
                    placeholder="enter username"
                />
                
                <label for="password">Password:</label>

                <input 
                    ref={passwordRef}
                    type="password" 
                    id="enter-pwd" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="off"
                    placeholder="enter password"
                />

                <input 
                    className="register-submit-button" 
                    type="submit" 
                    value="Log in"
                    onClick={console.log("user login attempted")}
                />
            </form>
        </section>
    )
}

export default UserLogin