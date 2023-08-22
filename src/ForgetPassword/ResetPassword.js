import React, { useState } from "react";
import './ResetPassword.css';
import { useNavigate , useParams} from "react-router-dom";
import Password from "../Password/Password";
import PassWordValidater from "../Validation";
import axios from "axios";


const ResetPassword = () => {

    const url = "https://64b17958062767bc482642bb.mockapi.io/newaccount"
    const { index } = useParams();
    const [enterPassword, setenterPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")
    const [resetPassword, setresetPassword] = useState(false);

    const [errorHandler, setErrorHandler] = useState({
        password: false
    })

    const updateErrorHandler = (key, value) => {
        setErrorHandler({
            ...errorHandler,
            [key]: value,
        })
    }

    const passWordHandler = (event) =>
        setenterPassword(event.target.value)

    const confirmHandler = (event) =>
        setconfirmPassword(event.target.value)

    const navigate = useNavigate();

    const reset = async() => {
        setresetPassword(true);
        const resp = await axios.get(url)
        if (errorHandler.password === true && enterPassword === confirmPassword) {
            await axios.put(url +"/"+ resp.data[index].id , {password:confirmPassword})
            navigate('/', { replace: true })
            alert('Password changed successfully..!')
        }
        else {
            alert('Password mismatch')
            setenterPassword("");
            setconfirmPassword("");
        }
    
    }
    return (
        <div className="box">
            <h1 className="heading">Reset password</h1>
            <hr />
            <PassWordValidater
                value={enterPassword}
                click={resetPassword}
                handleerror={updateErrorHandler} />
            <div className="tab"><Password place="Enter new password" functionPassword={passWordHandler} value={enterPassword} /></div>
            <PassWordValidater
                value={confirmPassword}
                click={resetPassword}
                handleerror={updateErrorHandler} />
            <div><Password place="Confirm password" functionPassword={confirmHandler} value={confirmPassword} /></div>
            <div>
                <button className="buttonrs" onClick={reset}>Reset Password</button>
            </div>

        </div>
    )
}

export default ResetPassword;