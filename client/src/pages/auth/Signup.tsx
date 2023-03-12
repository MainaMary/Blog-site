import React,{useState} from 'react'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import CustomTitle from "../../components/CustomTitle"
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import CustomLabel from '../../components/CustomLabel'
import useVisible from '../../hooks/useVisible'
import CustomLoader from '../../components/CustomLoader'
import { FormProps } from '../../model/types'
import { useAddUserMutation } from '../../features/user/userApi'

const Signup = () => {
    const [formValues, setFormValues] = useState<FormProps>({
        email:'',
        password:''
    })
const [error, setError] = useState('')
const [loading, setLoading] = useState('')
const {visible, handleVisisble} = useVisible()
const [addUser] = useAddUserMutation()
const {email, password} = formValues

const handleInputChange =(e:any) =>{
  const {value, name} = e.target
  setFormValues({...formValues, [name]:value})
  setError('')

}
const handleSubmit = async (e:any) =>{
  e.preventDefault()
  if(!email && !password){
   setError('Please submit all values')
  }
  const payload = {email, password}
  const response = await addUser(payload)
  console.log(response,'response')
}
  return (
    <div className='mt-12 w-full md:w-1/2 m-auto'>
         <form className='w-full' onSubmit={handleSubmit}>
      <CustomTitle>Signup</CustomTitle> 
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