import React, { useState } from "react";
import './ForgetPassword.css'
import { EmptyBox } from "../EmptyBox";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ForgetPassword = () => {

    const url = "https://64b17958062767bc482642bb.mockapi.io/newaccount"
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [nextPage, setNextPage] = useState(false)

    const emailHandler = (event) => {
        setEmail(event.target.value)
    }

    const emptyemail = (mail, tik) => {

        if (mail.length === 0 && tik) {
            return true;
        }
        return false;
    }

    const next = async () => {
        setNextPage(true);
        const resp = await axios.get(url);
        let flag = false
        for (let i = 0; i < resp.data.length; i++) {
            if (resp.data[i].email === email && !emptyemail(email, true)) {
                flag = true;
                navigate(`/forget-password-questions/${i}`)
            }
        }
        if(flag === false){
           setEmail("")
        }
    }
    return (
        <>
        <button className="back" onClick={() => navigate(-1)}>Back</button>
        <div className="outline">
            <h1 className="enter">Enter e-mail</h1>
            <EmptyBox click={nextPage} mail={email} empty={emptyemail}/>
            <input className="passbox" type="text" onChange={emailHandler} />
            <div>
                <button className="next" onClick={next}>Next</button>
            </div>
        </div>
        </>
    )
}

export default ForgetPassword;