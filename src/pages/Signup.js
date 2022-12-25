import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assests/Logo Shapes 15.png'
import '../css/signup.css'

const Signup = () => {
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
                    <form className='pb-4'>
                        <div className='d-flex flex-column'>
                            <label htmlFor='email'>Email Address</label>
                            <input id='email' name='email' type='email' placeholder='example@gmail.com'></input>
                        </div>
                        <div className='d-flex flex-column'>
                            <label htmlFor='password'>Password</label>
                            <input id='password' name='password' type='password' placeholder='*******'></input>
                            <p>Forgotten Password ?</p>
                        </div>
                        <button>Sign Up</button>
                        <p className='no-account mb-5'>Already have an Account ? <Link to="/">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup