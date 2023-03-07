import React from 'react'
import useModal from '../../hooks/useModal'
import CustomButton from '../../components/CustomButton'
import CustomTitle from "../../components/CustomTitle"
import AddPost from './AddPost'

const Posts = () => {
const {openModal, handleModal} = useModal()
  return (
    <div className='mt-12'>
     <div className='flex justify-between'>
        <CustomTitle>Posts</CustomTitle>
        <CustomButton onClick={handleModal}>Add post</CustomButton>
     </div>
     {openModal && <AddPost openModal={openModal} handleModal={handleModal}/>}
    </div>
  )
}

export default Posts