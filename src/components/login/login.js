import React from 'react'
import './css/login.css'


const Login = () => {
    
    return (
        <div className="wrapper d-flex justify-content-center align-items-center">
            <form className="needs-validation" novalidate>
                <div className="loginform">
                    <h3 className="text-center mb-4">LOGIN FORM</h3>
                    <div className="form-group mb-3">
                        <label className="form-label">Username:</label>
                        <input type="email" placeholder="Username" className="form-control" required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label">Password:</label>
                        <input type="password" placeholder="Password" className="form-control" required/>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>    
    )

}

export default Login