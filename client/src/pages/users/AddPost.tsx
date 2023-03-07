import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton";
import CustomLabel from "../../components/CustomLabel";
import CustomTitle from "../../components/CustomTitle";
import CustomInput from "../../components/CustomInput";
import { ModalProps } from "../../model/types";
import CustomModal from "../../components/CustomModal";
import { PostProps } from "../../model/types";
import { useAddPostMutation } from "../../features/user/userPostApi";

const AddPost = (props:ModalProps) => {
  const [formValues, setFormValues] = useState<PostProps>({
    title: "",
    body: "",
    id: "",
  });
  const {openModal, handleModal} = props
  const [error, setError] = useState<string>("");
  const [addPost] = useAddPostMutation();
  const { title, body } = formValues;
  const navigate = useNavigate()
  const handleInput = (e: any) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
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
    console.log(payload, "payload");

   const response:any = await addPost(payload);
   if(response?.data?.status){
    navigate('/userPosts')
   }
   console.log(response.data.status);
   
  };

  if(!openModal) return null
  return (
    <CustomModal>
      <div className="w-full md:w-[50%] shadow-lg rounded-2xl flex m-auto bg-white px-8 py-3 items-center justify-center h-auto mt-12">
        <form className="w-full" onSubmit={handleSubmit}>
          <CustomTitle>Add post</CustomTitle>
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
            <CustomButton type="submit">Add post</CustomButton>
            <CustomButton onClick={handleModal}>Cancel</CustomButton>
          </div>
        </form>
      </div>
    </CustomModal>
  );
};

export default AddPost;