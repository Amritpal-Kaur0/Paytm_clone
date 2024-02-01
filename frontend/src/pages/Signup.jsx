import { useState } from 'react'
import  Button from '../components/Button'
import Heading from '../components/Heading'
import InputBox from '../components/InputBox'
import SubHeading from '../components/SubHeading'
import BottomWarning from '../components/BottomWarning'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState('');
  const[username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  return (
    <div className='bg-indigo-200 h-screen flex justify-center'>
      <div className='flex flex-col justify-center'>
        <div className='rounded-lg bg-white w-96 text-center p-2 h-max px-4'>
      <Heading label={"Sign up"}/>
      <SubHeading label={"Create an account to get started"}/>
      <InputBox onChange={(e)=>{setFirstName(e.target.value)}} label={"First Name"} type={"text"} placeholder={"John"}/>
      <InputBox onChange={(e)=>{setLastName(e.target.value)}} label={"Last Name"} type={"text"} placeholder={"Doe"}/>
      <InputBox onChange={(e)=>{setUsername(e.target.value)}} label={"Username"} type={"text"} placeholder={"Enter your Username"}/>
      <InputBox onChange={(e)=>{setPassword(e.target.value)}} label={"Password"} type={"password"} placeholder={"Enter your password "}/>
      <div className='pt-6'>
        <Button onClick={async()=>{
          const response = await axios.post('http://localhost:3000/api/v1/user/signup', {
            firstName,
            lastName,
            username,
            password
          });
          localStorage.setItem('token', response.data.token);
          navigate('/dashboard');
        }} label={"Signup"}/>
      </div>
      <BottomWarning label={"Already have an account?"} to={"/signin"} buttonText={"Sign in"}/>
      </div>
    </div>
    </div>
  )
}
