import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assests/Logo Shapes 15.png'
import '../css/signup.css'
import { Alert } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import { RiFacebookCircleFill } from 'react-icons/ri'
import { BsFillExclamationCircleFill } from 'react-icons/bs'

import { useUserAuth } from '../context/UserAuthContext';

const Signup = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { signUp, googleSignIn, facebookSignIn } = useUserAuth();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await signUp(email, name, password);
            navigate("/");
        } catch (err) {
            if (name === '') {
                setError('Name input is empty')
            } else if (err.code === 'auth/invalid-email') {
                setError('Invalid email address')
            } else if (err.code === 'auth/email-already-in-use') {
                setError('Email address is already in use')
            } else if (err.code === 'auth/operation-not-allowed') {
                setError('Operation not allowed')
            } else if (err.code === 'auth/weak-password') {
                setError('Password should be at least 6 characters.')
            } else if (err.code === 'auth/internal-error') {
                setError('Password field is empty')
            } else if (err.code === "auth/missing-email") {
                setError('Missing email address')
            } else {
                setError(err.code)
            }
        }
    }
 
    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
            navigate("/dashboard");
        } catch (err) {
            setError(err.code)
        }
    }

    const handleFacebookSignIn = async () => {
        try {
            await facebookSignIn();
            navigate("/dashboard");
        } catch (err){
            setError(err.code)
        }
    }


    return (
        <div className='intro-page signup'>
            <div className='logo-intro'>
                <div className='d-flex align-items-center justify-content-center mx-auto'>
                    <img src={logo} alt="" className='m-auto'></img>
                </div>
            </div>
            <div className='login-intro'>
                <h3 className='mx-auto'>To Do App</h3>
                <div className='login-intro-div d-flex justify-content-center mx-auto'>
                    <form className='pb-4' onSubmit={(e) => { handleSubmit(e) }} id='signup-form'>
                        <div className='d-flex flex-column'>
                            <label htmlFor='name'>Username</label>
                            <input id='name' name='name' type='name' placeholder='username' onChange={(e) => { setName(e.target.value) }}></input>
                        </div>
                        <div className='d-flex flex-column'>
                            <label htmlFor='email'>Email Address</label>
                            <input id='email' name='email' type='email' placeholder='example@gmail.com' onChange={(e) => { setEmail(e.target.value) }}></input>
                        </div>
                        <div className='d-flex flex-column'>
                            <label htmlFor='password'>Password</label>
                            <input id='password' name='password' type='password' placeholder='*******' onChange={(e) => { setPassword(e.target.value) }}></input>
                            <p>Forgotten Password ?</p>
                        </div>
                        <button type='submit'>Sign Up</button>

                        <div className='d-flex justify-content-between align-items-baseline mb-3'>
                            <div className='dash mb-0'></div>
                            <p className='continue'>Or continue with</p>
                            <div className='dash mb-0'></div>
                        </div>
                        <div className='d-flex justify-content-center align-items-center mb-3'>
                            <FcGoogle className='me-3 fs-3 span' onClick={() => { handleGoogleSignIn() }} />
                            <RiFacebookCircleFill className='ms-3 fs-3 text-primary span' onClick={() => { handleFacebookSignIn() }} />
                        </div>
                        <p className='no-account mb-5'>Already have an Account ? <Link to="/">Login</Link></p>
                    </form>
                </div>
            </div>
            <div className='error-div'>
                {error && <Alert variant='danger' className='error'><BsFillExclamationCircleFill className='text-danger me-4 fs-4' />{error}</Alert>}
            </div>
        </div>
    )
}

export default Signup