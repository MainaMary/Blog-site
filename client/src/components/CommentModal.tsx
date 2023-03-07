import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../store/Store'
import CustomModal from './CustomModal'
import CustomInput from './CustomInput'
import CustomTitle from "./CustomTitle"
import CustomLabel from './CustomLabel'
import CustomButton from './CustomButton'
import { addComment } from '../slice/CommentsSlice'
export interface ModalProps {
  openModal?: boolean;
  handleModal? : () => void;
  postId: string
}
const CommentModal = (props:ModalProps) => {
  const [error, setError] = useState<string>('')
  const [val, setVal] = useState<string>('')
  const {openModal, handleModal, postId} = props
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  
  
  const handleSubmit = (e:any) =>{
    e.preventDefault()
   if(!error){
    setError('Please submit a comment')
    console.log(val,'value')
    const newValues ={
      body: val,
      postId: postId,
      id: Math.floor(Math.random() * 100).toString(),
      name:'test user',
      email:'testUser'

    }
    dispatch(addComment(newValues))
    setTimeout(()=>{
      if(newValues){
      navigate(`/singlePost/${postId}`)
      }
    },500)

   }
  }
  if(!openModal) return null
  return (
    <CustomModal>
        <form  className=" w-full md:w-1/3 rounded-md shadow-md bg-white z-40 px-8 py-4"
      onSubmit={handleSubmit}>
        <CustomTitle>Add comment</CustomTitle>
        <div className='my-4'>
        <CustomLabel>Comment</CustomLabel>
        <CustomInput  name="comment" onChange={(e:any) =>setVal(e.target.value)} type="text" value={val}/>
      </div>
      <div className="my-4 flex justify-between">
        <CustomButton type="submit">Submit</CustomButton>
        <CustomButton onClick={handleModal}>Cancel</CustomButton>
      </div>
        </form>
    </CustomModal>
  )
}

export default CommentModal