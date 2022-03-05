import React from 'react'
import { Header } from './Header';
// import Button from 'react-bootstrap/Button';

export const Login = (props) => {
    const handleLogin = (event) => {
        event.preventDefault();
        if (event.target.email == "" || event.target.password == "") {
            alert("Email or Password can't be blank");
            return
        }
        console.log("")
    }

    return (
        <div>
            <form>
                <label>
                    Email ID:
                    <input
                    type="text"
                    name="email"
                    />
                </label>
                <label>
                    Password:
                    <input
                    type="text"
                    name="password"                  
                    />
                </label>
                <input type="submit" value="Login" onClick={handleLogin}/>
            </form>
            <Header/>
        </div>
    )
}