import axios from 'axios';
import React from 'react'

const Login = () => {


    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');
    const [loading, setLoading] = React.useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        axios('https://stage.api.sloovi.com/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            }),
        })
      .then(res => res.json())
      .then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                localStorage.setItem('token', data.token);
            }
      })
     .catch(err => {
        console.log(err);
     })
    }

   


  return (
    <div>
       <div className="header">
       <h1>Login</h1>
       </div>
         <div className="container">
             <div className="email-container">
                    <label>Email</label>
                    <input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
             </div>
            <div className="password-container">
                    <label>Password</label>
                    <input type="password" 
                    placeholder="Enter your password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
             </div>
            <div className="login-btn-container">
                 <button 
                 className="login-button"
                 onClick={handleSubmit}>
                    Login
                 </button>
            </div>
         </div>

    </div>
  )
}

export default Login