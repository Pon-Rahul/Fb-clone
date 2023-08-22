import React, { useEffect } from "react";




const PassWordValidater = ({ value, click , handleerror}) => {


    useEffect(()=>{
        if(specialpassword(value) === true &&
             upperpassword(value) === true && 
             lowerpassword(value) === true && 
             numberpassword(value) === true && 
             lengthpassword(value) === true){
            handleerror("password",true)
        }
    },[value])
    const minlength = /.{8,}/;
    const special = /(?=.*?[#?!@$%^&*-])/;
    const uppercase = /(?=.*[A-Z])/;
    const lowercase = /(?=.*[a-z])/;
    const number = /(?=.*[0-9])/;

    const specialpassword = (pass) => {
        const splpass = special.test(pass)
        return (splpass);
    }
    const upperpassword = (pass) => {
        const uppass = uppercase.test(pass)
        return (uppass);
    }
    const lowerpassword = (pass) => {
        const lowpass = lowercase.test(pass)
        return (lowpass);
    }
    const numberpassword = (pass) => {
        const numpass = number.test(pass)
        return (numpass);
    }
    const lengthpassword = (pass) => {
        const lengthpass = minlength.test(pass)
        return (lengthpass);
    }

    if (!lengthpassword(value) && click) {
        return (
            <div className="rule">Minimum 8 characters required</div>
        )
    }
    else if (!specialpassword(value) && click) {
        return (
            <div className="rule">Enter atleast one special character</div>
        )
    }
    else if (!upperpassword(value) && click) {
        return (
            <div className="rule">Enter atleast one uppercase character</div>
        )
    }
    else if (!lowerpassword(value) && click) {
        return (
            <div className="rule">Enter atleast one lowercase character</div>
        )
    }
    else if (!numberpassword(value) && click) {
        return (
            <div className="rule">Enter atleast number</div>
        )
    }
    else {
        return null;
    }
}

export default PassWordValidater;