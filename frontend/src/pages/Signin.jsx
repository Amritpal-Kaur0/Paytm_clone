import  { useState } from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Signin() {
  const[username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  return (
    <div className=' bg-indigo-200 h-screen flex justify-center'>
    <div className='flex flex-col justify-center'>
      <div className='rounded-lg bg-white w-96 text-center p-2 h-max px-4'>
    <Heading label={"Sign In"}/>
    <SubHeading label={"Enter your credentials to access your account"}/>
    <InputBox onChange={(e)=>{setUsername(e.target.value)}}  label={"Username"} type={"email"} placeholder={"Enter your Username"}/>
    <InputBox onChange={(e)=>{setPassword(e.target.value)}}  label={"Password"} type={"password"} placeholder={"Enter your password "}/>
    <div className='pt-6'>
      <Button onClick={async()=>{
        const response = await axios.post('http://localhost:3000/api/v1/user/signin', {
          username,
          password
        });
        localStorage.setItem('token', response.data.token);
        navigate('/dashboard');
      }} label={"Sign In"}/>
    </div>
    <BottomWarning label={"Don't have an account?"} to={"/signup"} buttonText={"Sign up"}/>
    </div>
  </div>
  </div>
  )
}
