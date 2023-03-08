import React,{useState} from 'react'
import CustomModal from '../../components/CustomModal'
import { useDeletePostMutation } from '../../features/user/userPostApi'
import { DataProp } from '../../model/types'
interface ModalProps {
    openModal:boolean,
    handleModal :() =>void;
    postId:string | null
}
const ConfirmModal = ({openModal,handleModal, postId}:ModalProps) => {
    const [message, setMessage]= useState('')
    if(!openModal) return null
    const [deletePost] = useDeletePostMutation()
    console.log(postId,'post id');
    
    const deleteHandler = async (e:any) =>{
        e.preventDefault()
        const res:any = await deletePost(postId)
        console.log(res,'res')
        if(res?.data?.status){
            handleModal()
        }
    }
  return (
    <CustomModal>
        <form onSubmit={deleteHandler} className='w-full md:w-[30%] shadow-lg rounded-2xl m-auto bg-white px-8 py-3  h-auto'>
            <p></p>
            <div className='flex justify-between'>
                <p>Confirm</p>
                <p className="cursor-pointer"onClick={handleModal}>X</p>
            </div>
            <p>Are you sure you want to delete?</p>
            <div>
                <button >Delete</button>
                <button onClick={handleModal}>Cancel</button>
            </div>
          
           
        </form>
    </CustomModal>
  )
}

export default ConfirmModal