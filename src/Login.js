import React, { useState } from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom';
import './App.css'
const Login = () => {
  const history = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleapi = (e) =>{
    e.preventDefault();
    console.log({email,password});
    axios.post('https://reqres.in/api/login',{
      email: email,
      password: password,
    })
    //handelsuccess
    .then(function (response){
      console.log(response.data)
      localStorage.setItem('token', response.data.token)
      history('/')
    })
    .catch(function (error){
      alert('service-error')
      console.log(error)
      
    })
  }
  return (
    <div className='container'>
      <h1>Welcome to Sujan Website</h1>
      <form onSubmit={handleapi}>
      <label for="email">Email</label>
      <input required={true} type='email' value={email} placeholder='Enter your email please!' onChange={(e)=> setEmail(e.target.value)} />
      <label for="password">Password</label>
      <input required={true} type='password' value={password} placeholder='Enter your password please!' onChange={(e)=> setPassword(e.target.value)} />
      <button type='submit'>login</button>
     </form>
    <p> Don't have an Account ? <Link to="/register">Register Here</Link></p>
    </div>
  )
}

export default Login
