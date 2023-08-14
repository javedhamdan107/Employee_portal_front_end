import './Login.css'
import Input from "../../components/input/Input";
import { FC, useState } from "react";
import Button from '../../components/button/Button';
import { useNavigate } from 'react-router-dom';


const Login: FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [showError, setShowError] = useState(false);
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
        console.log(username);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        console.log(password);
    }
    const navigateToEmployee = () => {
        if(username.length>0&&password.length>0)
        navigate('/employees')
        else
        setShowError(true);


    }
    return (
        <section className="login-section">
            <div className="login-left">
                <img className="login-image" alt="banner" src="assets/img/banner.png" />

            </div>
            <div className="login-right">
                <div>
                    <div className="img-class">
                        <img className="login-logo" alt="logo" src="assets/img/kv-logo.png" />
                    </div>
                    <div className='form'>
                    <Input label='Username' value={username} type='text' onChange={handleUsernameChange} /><br></br>
                    <Input label='Password' value={password} type='password' onChange={handlePasswordChange} />
                    <Button text='Login' type='submit' onClick={navigateToEmployee} />
                    </div>
                    
                    <br>
                    </br>

                    {showError&&<div><span className='error'>Username and Password must atleast contain one character</span>
                        </div>}


                </div>


            </div>
        </section>
    )
}

export default Login;