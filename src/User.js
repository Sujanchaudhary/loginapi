import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const User = () => {
    const history = useNavigate();
    
    const [data, setData]= useState([])

    useEffect(()=>{
        if(!localStorage.getItem('token')){
            history('/login')
        }
        axios.get('https://reqres.in/api/users?page=1')
        .then((res)=>{
            // alert('success')
            console.log(res.data)
            setData(res?.data?.data)
        })
        .catch((err)=>{
            alert('something went wrong')
            console.log(err)
        })
    },[history])
  return (
    <div>
      Table of users:
      <table>
        <tr>
          <th>ID</th>
          <th>email</th>
          <th>first_name</th>
          <th>last_name</th>
        </tr>
        {
      data.length > 0 &&  
      data.map((item, index)=>{
            return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.email}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                </tr>
            )
            
        })
      }

      </table>
    </div>
  )
}

export default User
