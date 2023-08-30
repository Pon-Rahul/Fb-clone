import React, { useState } from "react";
import './ForgetPasswordQues.css'
import { useNavigate, useParams } from "react-router-dom";
import { Emptyques } from "../EmptyBox";
import axios from "axios";


const ForgetPasswordQues = () => {

    const url = "https://64b17958062767bc482642bb.mockapi.io/newaccount"
    const { index } = useParams();
    const navigate = useNavigate()
    const [firstQue, setFirstQues] = useState("")
    const [secondQue, setSecondQues] = useState('');
    const [thirdtQue, setThirdQues] = useState('');
    const [fourthtQue, setFourthQues] = useState('');
    const [submitQue, setSubmitQues] = useState(false);

    const quesBox = (que, tik) => {

        if (que.length === 0 && tik) {
            return true;
        }
        return false;
    }

    const firstQues = (event) => {
        setFirstQues(event.target.value);
    }

    const secondQues = (event) => {
        setSecondQues(event.target.value);
    }

    const thirdQues = (event) => {
        setThirdQues(event.target.value);
    }

    const fourthQues = (event) => {
        setFourthQues(event.target.value);
    }

    const nextStep = async () => {
        setSubmitQues(true);
        const resp = await axios.get(url)
        if ((resp.data[index].questionone === firstQue &&
            resp.data[index].questiontwo === secondQue &&
            resp.data[index].questionthree === thirdtQue &&
            resp.data[index].questionfour === fourthtQue)
            &&
            (!quesBox(firstQue, true) &&
                !quesBox(secondQue, true) &&
                !quesBox(thirdtQue , true) &&
                !quesBox(fourthtQue, true))
            ) 
        {
            navigate(`/reset-password/${index}`)
        }
        else if(resp.data[index].questionone !== firstQue){
            setFirstQues("")
        }
        else if(resp.data[index].questiontwo !== secondQue){
            setSecondQues("")
        }
        else if(resp.data[index].questionthree !== thirdtQue){
            setThirdQues("")
        }
        else if(resp.data[index].questionfour !== fourthtQue){
            setFourthQues("")
        }
    }

    const clickForgetPasswordQuestions = (e) => {
        if (e.keyCode === 13){
          nextStep();
        }
     }
    return (

        <div className="reqtangle" onKeyDown={(e) => clickForgetPasswordQuestions(e)}>
            <h1 className="head">Forget password questions</h1>
            <p className="diss">Answer all the questions to reset the password</p>
            <hr />
            <div className="sqr">
                <div className="que">What is the first book you read ?</div>
                <Emptyques que={quesBox} ans={firstQue} click={submitQue} />
                <input className="ansbox" type="text" onChange={firstQues} />
            </div>
            <div className="sqr">
                <div className="que">What was your favorite subject in high school ?</div>
                <Emptyques que={quesBox} ans={secondQue} click={submitQue} />
                <input className="ansbox" type="text" onChange={secondQues} />
            </div>
            <div className="sqr">
                <div className="que">Who is your favorite teacher ?</div>
                <Emptyques que={quesBox} ans={thirdtQue} click={submitQue} />
                <input className="ansbox" type="text" onChange={thirdQues} />
            </div>
            <div className="sqr">
                <div className="que">What is your favorite movie ?</div>
                <Emptyques que={quesBox} ans={fourthtQue} click={submitQue} />
                <input className="ansbox" type="text" onChange={fourthQues} />
            </div>

            <button className="buton" onClick={nextStep}>Submit</button>
        </div>
    )
}

export default ForgetPasswordQues;