import React from 'react';
import './Form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import Password from './Password';

const Form = () => {
    const navigate = useNavigate();
    
    function admin() {
        navigate("/admin");
    }
    return (
        <div className="inputs">
            <div className="form">
                <h2>Verify Your Identity</h2>
                <Password />
                <button className='login' onClick={admin}>Login <FontAwesomeIcon icon={faRightToBracket} /></button>
            </div>
        </div>
    );
}

export default Form;