import React from 'react'
import axios from 'axios'
import "./UserRegister.css"
import { useState, useEffect, useRef } from 'react'


const USERNAME_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const UserRegister = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();

    const [username, setUsername] = useState('');
    const [validUsername, setValidUsername] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);

    const [confirmedPwd, setConfirmedPwd] = useState('');
    const [pwdMatch, setPwdMatch] = useState(false);

    const [validEntry, setValidEntry] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        usernameRef.current.focus()
    }, [])

    useEffect(() => {
        setValidEntry(validUsername && validPassword && pwdMatch) 
    }, [validUsername, validPassword, pwdMatch])

    useEffect(() => {
        USERNAME_REGEX.test(username) ? setValidUsername(true) : setValidUsername(false)
        PASSWORD_REGEX.test(password) ? setValidPassword(true) : setValidPassword(false)
        password === confirmedPwd ? setPwdMatch(true) : setPwdMatch(false)
    }, [username, password, confirmedPwd])

    
    const handleSubmit = async (event, url = "https://hemingmusicapi.azurewebsites.net/Comment") => {
        event.preventDefault()
        const newComment = {
            name: document.getElementById("create-username").value,
            commentBody: document.getElementById("create-pwd").value
        }
        try {
            await axios.post(url, newComment)
            setSuccess(true);
        }
        catch (err) {
            alert(err.message)
        }
    }
    

    const UsernameCheck = () => {
        if (!username) return
        if (validUsername) {
            return <span className="valid-mark">OK</span>
        }
        return <span className="invalid-mark">4-24 characters combine letters a-z, numbers 0-9, _ and -</span>
    }

    const PasswordCheck = () => {
        if (!password) return
        if (validPassword) {
            return <span className="valid-mark">OK</span>
        } 
        return <span className="invalid-mark">8-24 characters , include lowercase letter, uppercase letter, number and special character (!@#$%)</span>
        
    }

    const PasswordConfirmCheck = () => {
        if (!confirmedPwd) return
        if (validPassword && pwdMatch) {
            return <span className="valid-mark">OK</span>
        } else if (!validPassword) {
            return <span className="invalid-mark">password must be valid</span>
        }
        return <span className="invalid-mark">must match password</span>
    }
    
    const SubmitButton = () => {
        if (validEntry) {
            return <input 
            className="register-submit-button" 
            type="submit" 
            value="Submit"
            onClick={handleSubmit}
            />
        }
        return <span className="register-submit-button-hidden">Submit</span>
    }

    if (success) {
        return (
            <section className="register-container">
                <h1>Registration successful!</h1>
            </section>
        )
    }

    return (
        <section className="register-container">
            <h1>Register</h1>
            <form>
                <label for="username">Username: </label> 
                
                <input 
                    ref={usernameRef}
                    type="text" 
                    id="create-username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    autoComplete="off"
                    spellCheck="false"
                    placeholder="enter username"
                />
                <UsernameCheck/>
                
                <label for="password">Password:</label>

                <input 
                    ref={passwordRef}
                    type="password" 
                    id="create-pwd" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="off"
                    placeholder="set password"
                />
                <PasswordCheck/>
                <label for="password" id="pwd">Confirm password:</label>
                <input 
                    type="password" 
                    id="confirm-pwd"
                    value={confirmedPwd}
                    onChange={(e) => setConfirmedPwd(e.target.value)}
                    autoComplete="off"
                    placeholder="re-enter password"
                />
                <PasswordConfirmCheck/>
                <SubmitButton/>
            </form>
        </section>
    )
}

export default UserRegister