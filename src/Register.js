import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registerHandler = (e)=>{
        e.preventDefault();

        console.log({email,password})
        axios.post('https://reqres.in/api/register',{
            email: email,
            password: password,
        })
        .then((res)=>{
            console.log(res.data)
            alert('success')
        })
        .catch((err)=>{
            console.log(err)
            alert('server error')
        })
    }
  return (
    <div className='container'>
      <h1>sign up</h1>
      Email:<input type='email' value={email} onChange={(e) => setEmail(e.target.value)
      }/>
      password:<input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={registerHandler}>Register</button>
      <p> Already have an Account ? <Link to="/login">Login</Link></p>
    </div>
  )
}

export default Register
