import React from 'react'
import logo from '../assests/Logo Shapes 15.png'
import '../css/intro.css'

const Intro = () => {
    return (
        <div className='intro-page'>
            <div className='logo-intro'>
                <div className='d-flex align-items-center justify-content-center mx-auto'>
                    <img src={logo} alt="" className='m-auto'></img>
                </div>
            </div>
        </div>
    )
}

export default Intro