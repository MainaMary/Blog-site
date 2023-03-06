import React ,{useState} from 'react'
import CustomLabel from '../components/CustomLabel'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'
import CustomTitle from "../components/CustomTitle"
import { FormProps } from '../model/types'
import CustomLoader from '../components/CustomLoader'
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai"

const Login = () => {
const [visible, setVisible] = useState<boolean>(false)
const [loading, setLoading] = useState<boolean>(false)
const [error, setError] = useState<string>('')
const [formValues, setFormValues] = useState<FormProps>({
    email:'',
    password:''
})

const {email, password} = formValues
const handleVisisble = () =>{
    setVisible(prev => !prev)
}
const handleInputChange = (e:any) =>{
    const {name, value} = e.target
    setFormValues({
        ...formValues,
        [name]: value
    })

}
const handleSubmit = () =>{
    if(!email || !password){
        setError('Please submit all details')
    }
    setLoading(false)

}
  return (
    <>
    <div className='w-full md:w-[50%] shadow-lg rounded-2xl flex m-auto bg-white px-8 py-3 items-center justify-center h-auto mt-12'>
    <form className='w-full' onSubmit={handleSubmit}>
      <CustomTitle>Login</CustomTitle> 
      <p className="text-red-500">{error}</p>
      <div className='my-4'>
        <CustomLabel>Email</CustomLabel>
        <CustomInput placeholder="John Doe" name="email" onChange={handleInputChange} type="text" value={email || ''}/>
      </div>
      <div className="my-4">
        <CustomLabel>Password</CustomLabel>
        <div className="relative">
        <CustomInput name="password" onChange={handleInputChange} type={visible ? "text" :"password"} value={password || ''}/>
          <div onClick={handleVisisble} className="absolute right-2 top-3">
          {visible ? <AiFillEyeInvisible/> : <AiFillEye/>}
          </div>
        
        </div>
        
      </div>
      {/* <div className="my-4 block  md:flex justify-between">
        <p>Don't have an account? <span className="text-[#200E32] font-semibold"><Link to="/register">Sign up</Link></span></p>
        <p className='text-[#200E32]  cursor-pointer font-semibold' onClick={handleForgotPassword}>Forgot password?</p>
      </div> */}
      <div className="my-4">
        <CustomButton type="submit">{loading ? <CustomLoader/> :"Sign in"}</CustomButton>
      </div>
    </form>
  </div>
 
    </>
    
  )
}

export default Login