import React from "react";
import { FaCommentAlt } from "react-icons/fa";
import useModal from "../../hooks/useModal";
import CustomButton from "../../components/CustomButton";
import CustomTitle from "../../components/CustomTitle";
import AddPost from "./AddPost";
import { useGetAllPostsQuery } from "../../features/user/userPostApi";
import CustomLoader from "../../components/CustomLoader";

const Posts = () => {
  const { openModal, handleModal } = useModal();
  const { data, isLoading } = useGetAllPostsQuery("posts");
  console.log(data?.data, "users post");
  return (
    <div className="mt-12">
      <div className="flex justify-between">
        <CustomTitle>Posts</CustomTitle>
        <CustomButton onClick={handleModal}>Add post</CustomButton>
      </div>
      <div>
        {isLoading ? (
          <CustomLoader />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data?.data?.map((label: any) => (
              <div
                key={label.id}
                className=" mt-12 px-3 py-2 bg-white shadow-md rounded-md"
              >
                <p className="text-blue">{label.title}</p>
                <p>{`${label.body}...`}</p>
                <p className="cursor-pointer font-semibold text-dark-blue">
                  View post
                </p>
                <div className="flex justify-between w-full  h-auto items-center">
                  <p>5 comments</p>
                  <div
                    className="flex h-auto items-center cursor-pointer"
                    onClick={() => {
                      handleModal();
                    }}
                  >
                    <FaCommentAlt className="text-gray-500" />
                    <p className="ml-4">comment</p>
                  </div>
                  <div></div>
                </div>
                <div className="flex my-2 h-auto items-center border-b border-gray-500">
                    
                </div>
                <div className="flex justify-between">
                    <CustomButton>Edit</CustomButton>
                    <CustomButton>Delete</CustomButton>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {openModal && <AddPost openModal={openModal} handleModal={handleModal} />}
    </div>
  );
};

export default Posts;
