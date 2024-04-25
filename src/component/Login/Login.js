import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')
    const navigate = useNavigate()

    const handleChange = (event) => {
        const { name , value } = event.target;
        if(name === 'email') setEmail(value)
        else if(name === 'password') setPassword(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!email || !password){
            setError('Please fill in all the fields')
        }else {
            setError('')
            setEmail('')
            setPassword('')
            navigate('/chatbot')
        }
    }
  return (
    <div>
        <div className='login-box'>
            <span>LogIn</span>
        </div>
        <div className='login-inputs'>
            <input type = 'email' placeholder='Enter your email...' onChange={handleChange} value={email} name='email' className = 'email-input'/>
            <input type = 'password' placeholder='Enter your password' onChange={handleChange} value = {password} name='password' className = 'email-input'/>
            <button onClick={handleSubmit} className='login-button'>Log In</button>
            {error && <p>{error}</p>}
        </div>
    </div>
  )
}

export default Login