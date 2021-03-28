import React from 'react'

const Register = () => {
    return (
        <div className="register form">
            <h1 className="title">Register</h1>
            <form className="form-wrapper">
            <div className="form-items">
                    <label htmlFor="username">UserName</label>
                    <input name="username" placeholder="UserName..."/>
                </div>
                <div className="form-items">
                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder="Email..."/>
                </div>
                <div className="form-items">
                    <label htmlFor="password">Password</label>
                    <input name="password" placeholder="Password..."/>
                </div>
            <button>Register</button>
            </form>
        </div>
    )
}

export default Register