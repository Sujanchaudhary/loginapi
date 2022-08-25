import React, { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const history = useNavigate();

    useEffect(()=>{
        if(!localStorage.getItem('token')){
            history('/login')
        }
    }, [history])

  return (
    <>
      <nav>
        <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to='/users'><li>User</li></Link>
        </ul>
      </nav>
      <h1>Welcome hOme!</h1>
      <form>
        <button onClick={() => {
            localStorage.removeItem('token')
        }}
        >logout</button>
      </form>
    </>
  )
}

export default Home
