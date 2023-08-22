import React,{useState} from "react";
import './Questions.css';
import { Emptyques } from "../EmptyBox";
import { useNavigate } from "react-router-dom";

const Questions = (props) => {

    const navigate = useNavigate();

    const[enteredFirstQues,setFirstQues] = useState('');
    const[enteredSecondQues,setSecondQues] = useState('');
    const[enteredThirdtQues,setThirdQues] = useState('');
    const[enteredFourthtQues,setFourthQues] = useState('');
    const[submit , setSubmit] = useState(false);

    const quesBox = (que , tik) => {

        if (que.length === 0 && tik) {
            return true;
        }
        return false;
    }

    const firstQues = (event) =>{
        setFirstQues(event.target.value);
    }

    const secondQues = (event) =>{
        setSecondQues(event.target.value);
    }

    const thirdQues =(event) =>{
        setThirdQues(event.target.value);
    }

    const fourthQues =(event) =>{
        setFourthQues(event.target.value);
    }
         
    const quesHandler = (event) =>{
        
        setSubmit(true);
        if(!quesBox(enteredFirstQues,true) && 
        !quesBox(enteredSecondQues,true) && 
        !quesBox(enteredThirdtQues ,true) &&
        !quesBox(enteredFourthtQues,true)){
         navigate('/',{replace:true})  
        
         alert('Account created successfully..!')
        }
        const recoveryquestions = {
            questionone : enteredFirstQues,
            questiontwo : enteredSecondQues,
            questionthree :enteredThirdtQues,
            questionfour : enteredFourthtQues
        }
        props.onAccountData(recoveryquestions);
    }

    return (
        <div className="reqtangle">
            <h1 className="head">Forget password questions</h1>
            <p className="dis">Password-recovery questions you should be answered, if in case you forgot your password it helps to retrieve your password</p>
            <hr />
            <div className="sqr">
                <div className="que">What is the first book you read ?</div>
                <Emptyques que ={quesBox} ans = {enteredFirstQues} click = {submit}/>
                <input className="ansbox" type="text" onChange={firstQues}/>
            </div>
            <div className="sqr">
                <div className="que">What was your favorite subject in high school ?</div>
                <Emptyques que ={quesBox} ans = {enteredSecondQues} click = {submit}/>
                <input className="ansbox" type="text" onChange={secondQues}/>
            </div>
            <div className="sqr">
                <div className="que">Who is your favorite teacher ?</div>
                <Emptyques que ={quesBox} ans = {enteredThirdtQues} click = {submit}/>
                <input className="ansbox" type="text" onChange={thirdQues}/>
            </div>
            <div className="sqr">
                <div className="que">What is your favorite movie ?</div>
                <Emptyques que ={quesBox} ans = {enteredFourthtQues} click = {submit}/>
                <input className="ansbox" type="text" onChange={fourthQues}/>
            </div>

            <button className="buton" onClick={quesHandler}>Sign up</button>
        </div>
    )
}
export default Questions;