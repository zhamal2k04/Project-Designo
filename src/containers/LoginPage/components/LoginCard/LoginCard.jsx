import React, { useEffect } from 'react'
import "../LoginCard/LoginCard.css"
import { useState } from 'react';
import SignIn from '../../GoogleSignIn/SignIn';

const LoginCard = () => {
    const [name, setName] = useState('')
    const [nameDirty, setNameDirty] = useState(false)
    const [nameError, setNameError] = useState("Name Hole Cannot be Empty")
    const [email, setEmail] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [emailError, setEmailError] = useState("Email Cannot be Empty")
    const [password, setPassword] = useState('')
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [passwordError, setPasswordError] = useState("Password Cannot be Empty")
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (emailError || passwordError || nameError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError, nameError])

    const nameHandler = (e) => {
        setName(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 30) {
            setNameError('Name hole should be more than 3 or 30')
            if (!e.target.value) {
                setNameError("Name Hole Cannot be Empty")
            }
        } else {
            setNameError('')
        }
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/

        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Incorrect Email!')
            if (!e.target.value) {
                setEmailError("Email Cannot be Empty")
            }
        } else {
            setEmailError("")
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 8) {
            setPasswordError('Password length should be more than 3 and 8!')
            if (!e.target.value) {
                setPasswordError("Password Cannot be Empty")
            }
        } else {
            setPasswordError("")
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true)
                break
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(`First & Last Name: ${name}\nEmail: ${email}\nPassword: ${password}`)
    }

    return (
        <div className='loginCard-container'>
            <div className="loginCard-left"></div>
            <div className="loginCard-right">
                <div className="title-content">
                    <h1>Join us Today 👋</h1>
                    <p>Clarity gives you the blocks and components you need to create a truly professional website.</p>
                    <SignIn />
                </div>
                <div className="input-content">
                    <form className='form-signup'>
                        <p>First & Last Name</p>
                        {(nameDirty && nameError) && <div style={{ color: 'red' }}>{nameError}</div>}
                        <input onChange={e => nameHandler(e)} value={name} onBlur={e => blurHandler(e)} type="text" name='name' placeholder='i.e Devon Larratt' />
                        <p>Email Address</p>
                        {(emailDirty && emailError) && <div style={{ color: 'red' }}>{emailError}</div>}
                        <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} type="email" name='email' placeholder='i.e devon@mail.com' />
                        <p>Password</p>
                        {(passwordDirty && passwordError) && <div style={{ color: 'red' }}>{passwordError}</div>}
                        <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} type="password" name='password' placeholder='*********' />
                        <button onClick={submitHandler} disabled={!formValid} type='submit' id='sign-btn'>Sign Up</button>
                        <span>Forgot the Password?</span>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginCard;