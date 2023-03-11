import React,{useState} from 'react'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import CustomTitle from "../../components/CustomTitle"
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import CustomLabel from '../../components/CustomLabel'
import useVisible from '../../hooks/useVisible'
import CustomLoader from '../../components/CustomLoader'
import { FormProps } from '../../model/types'

const Signup = () => {
    const [formValues, setFormValues] = useState<FormProps>({
        email:'',
        password:''
    })
const [error, setError] = useState('')
const [loading, setLoading] = useState('')
const {visible, handleVisisble} = useVisible()
const handleSubmit = (e:any) =>{
    e.preventDefault()
}
const handleInputChange =(e:any) =>{

}
  return (
    <div>
         <form className='w-full' onSubmit={handleSubmit}>
      <CustomTitle>Login</CustomTitle> 
      <p className="text-red-500">{error}</p>
      <div className='my-4'>
        <CustomLabel>Email</CustomLabel>
        <CustomInput placeholder="John Doe" name="email" onChange={handleInputChange} type="text" value={formValues.email || ''}/>
      </div>
      <div className="my-4">
        <CustomLabel>Password</CustomLabel>
        <div className="relative">
        <CustomInput name="password" onChange={handleInputChange} type={visible ? "text" :"password"} value={formValues.password || ''}/>
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
  )
}

export default Signup