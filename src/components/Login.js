import React from 'react'

const Login = () => {
    return (
        <div className="login form">
            <h1 className="title">Login</h1>
            <form className="form-wrapper">
                <div className="form-items">
                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder="Email..." />
                </div>
                <div className="form-items">
                    <label htmlFor="password">Password</label>
                    <input name="password" placeholder="Password..." />
                </div>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login