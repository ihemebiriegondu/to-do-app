import React from 'react'
import logo from '../assests/Logo Shapes 15.png'
import '../css/intro.css'
import { FcGoogle } from 'react-icons/fc';
import { RiFacebookCircleFill } from 'react-icons/ri'

const Intro = () => {
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
                    <form className='pb-4'>
                        <div className='d-flex flex-column'>
                            <label htmlFor='email'>Email Address</label>
                            <input id='email' name='email' type='email' placeholder='example@gmail.com'></input>
                        </div>
                        <div className='d-flex flex-column'>
                            <label htmlFor='password'>Password</label>
                            <input id='password' name='password' type='password' placeholder='password'></input>
                            <p>Forgotten Password ?</p>
                        </div>
                        <button>Log in</button>

                        <div className='d-flex justify-content-between align-items-baseline mb-3'>
                            <div className='dash mb-0'></div>
                            <p className='continue'>Or continue with</p>
                            <div className='dash mb-0'></div>
                        </div>
                        <div className='d-flex justify-content-center align-items-center mb-3'>
                            <FcGoogle className='me-4 fs-3' />
                            <RiFacebookCircleFill className='me-4 fs-3 text-primary' />
                        </div>
                        <p className='no-account mb-5'>Don’t have an Account? <a href='/'>Sign Up</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Intro