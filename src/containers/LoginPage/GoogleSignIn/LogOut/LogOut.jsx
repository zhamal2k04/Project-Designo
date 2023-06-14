import React from 'react'
import "./LogOut.css"
const LogOut = () => {
    const logout = () => {
        localStorage.clear()
        window.location.reload()
    }
    return (
        <div className='logOut-container'>
            <h1>Now You Are Signed In</h1>
            <button onClick={logout}>LogOut</button>
        </div>

    )
}

export default LogOut;