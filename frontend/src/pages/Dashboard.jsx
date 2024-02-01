import  { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Appbar from '../components/Appbar'
import Balance from '../components/Balance'
import {Users} from '../components/Users'
import { useEffect } from 'react'
import axios from 'axios';
import Button from '../components/Button'
import Footer from '../components/Footer'

export default function 
Dashboard() {
  const  navigate = useNavigate()
  const [value, setValue] = useState('00')
  const token = localStorage.getItem('token')
  if (!token) {
    alert('Please login to continue')
    navigate('/signin')
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/signin')
  }


useEffect(() => {
   axios.get('http://localhost:3000/api/v1/account/balance', {
    headers: {
      Accept: '*/*',
      Authorization: 'Bearer ' + token,
    },
  })
  .then(response => {
    setValue(response.data.balance)
  })
}, [token])


  return (
    <div>
      <Appbar/>
      <div className='m-8'>
        <div className='m-5 flex justify-between'>
       <Balance value={parseFloat(value).toFixed(2)}/>
      <button onClick={()=>handleLogout()} className='bg-indigo-700 px-5 py-3 rounded-lg text-white hover:bg-indigo-900'> Logout</button>

       </div>
       <Users/>
      </div>
      <Footer/>
    </div>
  )
}
