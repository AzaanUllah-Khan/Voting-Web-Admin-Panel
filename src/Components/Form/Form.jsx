import React from 'react';
import Input from './Input/Input';
import './Form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const Form = () => {
    const [dis,setDis] = useState(true)
    const navigate = useNavigate();
    
    function admin() {
        navigate("/admin");
    }
    function check(){
        if(document.getElementById('Password').value != ""){
            setDis(false)
            }
            else{
            setDis(true)
        }
    }
    return (
        <div className="inputs">
            <div className="form">
                <h2>Verify Your Identity</h2>
                <Input onChange={check} id="Password" placeholder="Enter Your Password" type="password"/>
                <button className='login' onClick={admin} disabled={dis}>Login <FontAwesomeIcon icon={faRightToBracket} /></button>
            </div>
        </div>
    );
}

export default Form;