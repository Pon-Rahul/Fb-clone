import React, { useState } from "react";
import usePasswordToggle from "./PasswordToggle";
import './Password.css';


const Password = ({ place, functionPassword, value }) => {


    const [PasswordInputType, ToggleIcon] = usePasswordToggle();



    return (
        <div className="pwd">
            <input className="pass"
                placeholder={place == null ? "Password" : place}
                onChange={functionPassword}
                type={PasswordInputType}
                value={value}
            /><span className="password-toogle-icon">{ToggleIcon}</span>
        </div>
    )
}

export default Password;