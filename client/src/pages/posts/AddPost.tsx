import React,{useState} from 'react'
import CustomButton from '../../components/CustomButton'
import CustomLabel from '../../components/CustomLabel'
import CustomTitle from "../../components/CustomTitle"
import CustomInput from '../../components/CustomInput'
import { PostProps } from '../../model/types'
import { useAddPostMutation } from '../../features/user/userPostApi'

const AddPost = () => {
  const [formValues, setFormValues] = useState<PostProps>({
    title:'',
    body:'',
    id:''
  })
  const [error, setError] = useState<string>('')
  const [addPost] = useAddPostMutation()
  const {title, body} = formValues
  const handleInput =(e:any) =>{
    const {name, value} = e.target
    setFormValues({
    ...formValues,
    [name]:value
    })
  }
  const handleSubmit = async(e:any) =>{
    e.preventDefault()
    if(!title || !body){
      setError('Please provide all values')
    }
    const payload = {
      body,
      title,
      userId: Math.floor(Math.random() * 100)

    }
    console.log(payload,'payload');
    
    await addPost(payload)
    console.log(formValues,'formValues')
  }
  return (
    <>
    <div className='w-full md:w-[50%] shadow-lg rounded-2xl flex m-auto bg-white px-8 py-3 items-center justify-center h-auto mt-12'>
    <form className='w-full' onSubmit={handleSubmit}>
      <CustomTitle>Add post</CustomTitle> 
      <p className="text-red-500">{error}</p>
      <div className='my-4'>
        <CustomLabel>Title</CustomLabel>
        <CustomInput placeholder="John Doe" name="title" onChange={handleInput} type="text" value={title}/>
      </div>
      <div className='my-4'>
        <CustomLabel>Post</CustomLabel>
        <CustomInput placeholder="autem assumenda" name="body" onChange={handleInput} type="text" value={body}/>
      </div>
     
      <div className="my-4">
        <CustomButton type="submit">Add post</CustomButton>
      </div>
    </form>
  </div>
 
    </>
  )
}

export default AddPost