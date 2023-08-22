import { useState } from 'react';
import './CreateNewAcc.css'
import { useNavigate } from 'react-router-dom';
import Password from '../Password/Password';
import PassWordValidater from '../Validation';
import { EmptyBox, EmptyName, Emptyuser } from '../EmptyBox';


const CreateNewAcc = (props) => {

    const [fullName, setFullName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signUp, setSignUp] = useState(false);

    const [errorHandler , setErrorHandler] = useState({
         password : false
    })
     
    const updateErrorHandler = (key,value) =>{
        setErrorHandler({
            ...errorHandler,
             [key]:value,
        })
    }
    const fullNameHandler = (event) => {
        setFullName(event.target.value);
    }

    const userNameHandler = (event) => {
        setUserName(event.target.value);
    }

    const eMailHandler = (event) => {
        setEmail(event.target.value);
    }

    const passWordHandler = (event) => {
        setPassword(event.target.value);
    }

    const empty = (mail, tik) => {

        if (mail.length === 0 && tik) {
            return true;
        }
       return false;
        
    }

    const signupHandler = (event) => {
        event.preventDefault();

        const signupdata = {
            fullname: fullName,
            username: userName,
            email: email,
            password: password
        };

        props.onAccountData(signupdata);

    }


    const navigate = useNavigate();

    const signup = () => {
        setSignUp(true);
            if(errorHandler.password === true && 
                !empty(fullName, true) && 
                !empty(userName, true) && 
                !empty(email, true)) {
            navigate("questions");
        }

    }

   
    
    return (
        <>
        <button className='back' onClick={() => navigate(-1)}>Back</button>
        <div className='rectangle'>
            <h1 className='signup'>Sign up</h1>
            
            <form onSubmit={signupHandler}>
                <EmptyName empty={empty} name={fullName} click={signUp} />
                <div>
                    <input
                        className='txtbox'
                        type="text"
                        placeholder="Full name"
                        onChange={fullNameHandler} />
                </div>
                <Emptyuser empty={empty} user={userName} click={signUp} />
                <div>
                    <input
                        className='txtbox'
                        type="text"
                        placeholder="User name"
                        onChange={userNameHandler} />
                </div>
                <EmptyBox empty={empty} mail={email} click={signUp} />
                <div>
                    <input
                        className='txtbox'
                        type="text"
                        placeholder="E-mail"
                        onChange={eMailHandler} />
                </div>
                <PassWordValidater
                    value={password}
                    click={signUp} 
                    handleerror = {updateErrorHandler}/>
                <Password functionPassword={passWordHandler} value={password} />
                <div>
                    <button
                        className='button'
                        onClick={signup}>
                        Sign up
                    </button>
                </div>

            </form>
        </div>
        </>
    )
}
export default CreateNewAcc;