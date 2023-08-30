import React, { useState } from "react";
import './Login.css';
import { useNavigate } from "react-router-dom";
import Password from "../Password/Password";
import axios from "axios";

const Login = () => {

    const url = "https://64b17958062767bc482642bb.mockapi.io/newaccount"
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [login, setLogin] = useState(false)

    const navigate = useNavigate()

    const eMailHandler = (event) => {
        setLoginEmail(event.target.value)
    }
    const passWordHandler = (event) => {
        setLoginPassword(event.target.value)
    }

    const loginpage = async () => {
        const resp = await axios.get(url)
        for (let i = 0; i < resp.data.length; i++) {
            if (resp.data[i].email === loginEmail && resp.data[i].password === loginPassword) {
                navigate("/feed");
                return;
            }
        }
        alert("enter valid data")
        setLoginEmail("")
        setLoginPassword("")
        setLogin(true);
    }

    const clickloginHandler = (e) => {
        if (e.keyCode === 13){
          loginpage();
        }
     }

    return (
        <div className="bg">
            <div className="rectangle" onKeyDown={(e) => clickloginHandler(e)}>
                <h1 className="login">Log in</h1>
                <form>
                    <div>
                        <input className="txtbox"
                            type="text"
                            placeholder="E-mail"
                            onChange={eMailHandler}
                            value={loginEmail} />
                    </div>
                    <Password
                        value={loginPassword}
                        functionPassword={passWordHandler} />
                    <div className="forgot" onClick={() => navigate("forget-password")}>Forgotten password ?</div>
                    <div>
                        <button className="buttom" type="button" onClick={(e) => loginpage(e)}>Login</button>
                    </div>
                    <hr />
                    <button className="newacc" type="button" onClick={() => navigate("/create-new-account")}>Create new account</button>
                </form>
            </div>
        </div>
    )
}

export default Login;