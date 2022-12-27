import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assests/Logo Shapes 15.png'
import '../css/intro.css'
import { FcGoogle } from 'react-icons/fc';
import { RiFacebookCircleFill } from 'react-icons/ri'
import { BsFillExclamationCircleFill } from 'react-icons/bs'

import { Alert } from 'react-bootstrap';
import { useUserAuth } from '../context/UserAuthContext';


const Intro = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { logIn, googleSignIn } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await logIn(email, password);
            navigate("/dashboard");
        } catch (err) {
            if (err.code === 'auth/invalid-email') {
                setError('Invalid email address')
            } else if (err.code === 'auth/user-disabled') {
                setError('User disabled')
            } else if (err.code === 'auth/user-not-found') {
                setError('User not found')
            } else if (err.code === 'auth/internal-error') {
                setError('Invalid Password')
            } else if (err.code === "auth/missing-email") {
                setError('Missing email address')
            } else if (err.code === 'auth/wrong-password') {
                setError('Wrong Password')
            } else if (err.code === 'auth/operation-not-allowed') {
                setError('Operation not allowed')
            } else {
                setError(err.message);
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

    return (
        <div className='intro-page'>
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
                            <label htmlFor='email'>Email Address</label>
                            <input id='email' name='email' type='email' placeholder='example@gmail.com' onChange={(e) => { setEmail(e.target.value) }}></input>
                        </div>
                        <div className='d-flex flex-column'>
                            <label htmlFor='password'>Password</label>
                            <input id='password' name='password' type='password' placeholder='*******' onChange={(e) => { setPassword(e.target.value) }}></input>
                            <p>Forgotten Password ?</p>
                        </div>
                        <button>Log in</button>

                        <div className='d-flex justify-content-between align-items-baseline mb-3'>
                            <div className='dash mb-0'></div>
                            <p className='continue'>Or continue with</p>
                            <div className='dash mb-0'></div>
                        </div>
                        <div className='d-flex justify-content-center align-items-center mb-3'>
                            <FcGoogle className='me-3 fs-3 span' onClick={() => { handleGoogleSignIn() }} />
                            <RiFacebookCircleFill className='ms-3 fs-3 text-primary span' />
                        </div>
                        <p className='no-account mb-5'>Don’t have an Account? <Link to="/signup">Sign Up</Link></p>
                    </form>
                </div>
            </div>
            <div className='error-div'>
                {error && <Alert variant='danger' className='error'><BsFillExclamationCircleFill className='text-danger me-4 fs-4' />{error}</Alert>}
            </div>
        </div>
    )
}

export default Intro