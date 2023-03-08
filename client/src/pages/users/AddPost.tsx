import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton";
import CustomLabel from "../../components/CustomLabel";
import CustomTitle from "../../components/CustomTitle";
import CustomInput from "../../components/CustomInput";
import { ModalProps , SinglePostProps} from "../../model/types";
import CustomModal from "../../components/CustomModal";
import { PostProps } from "../../model/types";
import { useAddPostMutation } from "../../features/user/userPostApi";
import { useAppSelector, useAppDispatch } from "../../store/Store";
import { closeEdit } from "../../slice/EditSlice";
import { useUpdatePostMutation , useGetAllPostsQuery, useGetSinglePostQuery} from "../../features/user/userPostApi";
const AddPost = (props:ModalProps) => {
  const [formValues, setFormValues] = useState<PostProps>({
    title: "",
    body: "",
    id: "",
  });
  const {openModal, handleModal, postId} = props
  const [error, setError] = useState<string>("");
  const [addPost] = useAddPostMutation();
  const { title, body } = formValues;
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const {isEdit} = useAppSelector(state =>state.edit)
  const [updatePost] = useUpdatePostMutation()
  const {data} = useGetAllPostsQuery('posts')
  console.log(isEdit,'edit')
  const handleInput = (e: any) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const modalHandler = () =>{
    handleModal()
    dispatch(closeEdit(false))
  }
  const singlePost = data?.data?.find((item:SinglePostProps)=> item._id === postId)
  console.log(singlePost)
 
  const newObj = {
    title: singlePost?.title,
    body: singlePost?.body,
    id: singlePost?._id
  }
useEffect(()=>{
  if(singlePost){
    setFormValues({...newObj})
  }
},[postId])
  
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!title || !body) {
      setError("Please provide all values");
    }
    console.log(typeof String(Math.floor(Math.random() * 100)), "userId");
    const payload = {
      body,
      title,
      userId: String(Math.floor(Math.random() * 100)),
    };
    const updatedpayload = {
      body,
      title,
      userId: String(Math.floor(Math.random() * 100)),
      id:postId
    };
    
    if(formValues.id){
      console.log(formValues?.id)
    const response = await updatePost(updatedpayload)
    console.log(response ,'edit form details')
    }else {
      console.log(formValues.id)
   const response:any = await addPost(payload);
   if(response?.data?.status){
    navigate('/userPosts')
   }

   console.log(response.data.status);
    }
   
  
   
  };

  if(!openModal) return null
  return (
    <CustomModal>
      <div className="w-full md:w-[50%] shadow-lg rounded-2xl flex m-auto bg-white px-8 py-3 items-center justify-center h-auto">
        <form className="w-full" onSubmit={handleSubmit}>
          <CustomTitle>{isEdit ? 'Edit Details': 'Add post'}</CustomTitle>
          <p className="text-red-500">{error}</p>
          <div className="my-4">
            <CustomLabel>Title</CustomLabel>
            <CustomInput
              placeholder="John Doe"
              name="title"
              onChange={handleInput}
              type="text"
              value={title}
            />
          </div>
          <div className="my-4">
            <CustomLabel>Post</CustomLabel>
            <CustomInput
              placeholder="autem assumenda"
              name="body"
              onChange={handleInput}
              type="text"
              value={body}
            />
          </div>

          <div className="my-4 flex justify-between">
            <CustomButton type="submit">{isEdit ? 'Edit' :'Add post'}</CustomButton>
            <CustomButton onClick={modalHandler}>Cancel</CustomButton>
          </div>
        </form>
      </div>
    </CustomModal>
  );
};

export default AddPost;
