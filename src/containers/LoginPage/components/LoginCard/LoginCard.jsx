import React from 'react'
import "../LoginCard/LoginCard.css"
import google_icon from "../../images/google-icon.png"
const LoginCard = () => {
    return (
        <div className='loginCard-container'>
            <div className="loginCard-left">

            </div>
            <div className="loginCard-right">
                <div className="title-content">
                    <h1>Join us Today 👋</h1>
                    <p>Clarity gives you the blocks and components you need to create a truly professional website.</p>
                    <button id='google-btn'>
                        <img src={google_icon} alt="icon" />
                        <span>Sign up with Google</span>
                    </button>
                </div>
                <div className="input-content">
                    <form className='form-signup'>
                        <p>First & Last Name</p>
                        <input type="text" placeholder='i.e Devon Larratt' />
                        <p>Email Address</p>
                        <input type="email" placeholder='i.e devon@mail.com' />
                        <p>Password</p>
                        <input type="password" placeholder='*********' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginCard;