import React, { useEffect } from 'react'
import "../LoginCard/LoginCard.css"
import google_icon from "../../images/google-icon.png"
import { useState } from 'react'
const LoginCard = () => {
    // const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState("Email Cannot be Empty")
    const [passwordError, setPasswordError] = useState("Password Cannot be Empty")
    const [formValid, setFormValid] = useState(false)

    useEffect(() =>{
        if(emailError || passwordError){
            setFormValid(false)
        }else{
            setFormValid(true)
        }
    }, [emailError, passwordError])

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/

        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Incorrect Email!')
        } else {
            setEmailError("")
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 8){
            setPasswordError('Password length should be more than 3 and 8!')
            if(!e.target.value){
                setPasswordError("Password Cannot be Empty")
            }
        }else{
            setPasswordError("")
        }
    }
  
    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    
    return (
        <div className='loginCard-container'>
            <div className="loginCard-left"></div>
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
                        {(emailDirty && emailError) && <div style={{ color: 'red' }}>{emailError}</div>}
                        <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} type="email" name='email' placeholder='i.e devon@mail.com' />
                        <p>Password</p>
                        {(passwordDirty && passwordError) && <div style={{ color: 'red' }}>{passwordError}</div>}
                        <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} type="password" name='password' placeholder='*********' />
                    <button disabled={!formValid} type='submit' id='sign-btn'>Sign Up</button>
                    </form>
                    <span>Forgot the Password?</span>
                </div>
            </div>
        </div>
    )
}

export default LoginCard;