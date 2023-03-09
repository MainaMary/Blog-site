import React, { useState, useEffect } from "react";
import { useAppSelector } from "../../store/Store";
import { useNavigate } from "react-router-dom";
import { FaCommentAlt, FaUserAlt } from "react-icons/fa";
import useModal from "../../hooks/useModal";
import CustomButton from "../../components/CustomButton";
import CustomTitle from "../../components/CustomTitle";
import CustomInput from "../../components/CustomInput";
import AddPost from "./AddPost";
import { useGetAllPostsQuery } from "../../features/user/userPostApi";
import CustomLoader from "../../components/CustomLoader";
import ConfirmModal from "./ConfirmModal";
import { useAddCommentMutation } from "../../features/user/commentApi";
import { useAppDispatch } from "../../store/Store";
import { openEdit } from "../../slice/EditSlice";


const Posts = () => {
  const [edit, setEdit] = useState(false);
  const [postId, setPostId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [comment, setComment] = useState<string>("");
  const { openModal, handleModal } = useModal();
  const { data, isLoading, isSuccess } = useGetAllPostsQuery("posts");
  const [dataComment, setDataComment] = useState<any>({});
  const navigate = useNavigate();
  const { isEdit } = useAppSelector((state) => state.edit);

  useEffect(() => {
    setDataComment(
      data?.data.reduce(
        (obj: any, item: any) => Object.assign(obj, { [item._id]: "" }),
        {}
      )
    );
  }, [isSuccess]);

  const [addComment] = useAddCommentMutation();
  const dispatch = useAppDispatch();
  //onClick handler -append/push postId  to an array if it does not exist || remove post id from an array if it exist
  //if(arraypostIds.include(laId)) show

  console.log(dataComment, "comment");

  const handleDelete = (id: string) => {
    handleModal(), setPostId(id), setEdit(true);
  };
  const handleUpdate = (id: string) => {
    dispatch(openEdit(true));
    setPostId(id);
    handleModal();
    setEdit(false)
  };
  const handleCommentForm = () => {
    setShowForm((prev) => !prev);
  };
  const handleFormSubmit = async (e: any, id: string) => {
    e.preventDefault();
    if (!comment) return;

    const payload = {
      body: comment,
      name: "Test user",
      postId: id,
      email: "test@gmail.com",
    };
    const response: any = await addComment(payload);
    console.log(response, "response");
  };
  console.log(showForm, "show form");
  return (
    <div className="mt-12">
      <div className="flex justify-between">
        <CustomTitle>Posts</CustomTitle>
        <CustomButton
          onClick={() => {
            handleModal(), setEdit(false);
          }}
        >
          Add post
        </CustomButton>
      </div>
      <div>
        {isLoading ? (
          <CustomLoader />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data?.data?.map((label: any, index: number) => (
              <div
                key={index}
                className=" mt-12 px-3 py-2 bg-white shadow-md rounded-md"
              >
                <div className="flex items-center h-auto">
                  <div>
                   
                    <FaUserAlt size={20}/>
                    
                  </div>
                  <div className="text-sm ml-4">
                    <p>{'email'}</p>
                    <p> 2 hours ago</p>
                  </div>
                </div>
                <p className="text-dark-blue h-[60px] mt-4 ">{label.title}</p>
                <p className="h-[80px]">{`${label.body}...`}</p>
                <p
                  onClick={() => navigate(`/userPost/${label._id}`)}
                  className="cursor-pointer font-semibold text-dark-blue mt-4"
                >
                  View post
                </p>
                <div className="flex justify-between w-full mb-2 h-auto items-center">
                  <p>5 comments</p>
                  <div
                    className="flex h-auto items-center cursor-pointer"
                    onClick={() => {
                      handleCommentForm(), setPostId(label._id);
                    }}
                  >
                    <FaCommentAlt className="text-gray-500" />
                    <p className="ml-4">comment</p>
                  </div>
                </div>
                {postId === label._id && (
                  <form
                    onSubmit={(e: any) => handleFormSubmit(e, label._id)}
                    className="flex"
                  >
                    <div className="my-4 block md:flex w-full justify-between">
                      {/* <CustomInput
                        placeholder="e.g Good article"
                        name="labelId"
                        onChange={(e: any) => setDataComment((dataComment:any)=> ({...dataComment, [label._id]:e.target.value}))}
                        type="text"
                        value={dataComment[label._id]}
                      /> */}
                      <CustomInput
                        placeholder="e.g Good article"
                        name="comment"
                        onChange={(e: any) => setComment(e.target.value)}
                        type="text"
                        value={comment}
                      />
                      <CustomButton className="md:ml-3">Add</CustomButton>
                    </div>
                  </form>
                )}
                <div className="flex h-auto items-center border-b border-gray-500"></div>
                <div className="flex justify-between mt-2">
                  <button
                    onClick={() => handleUpdate(label._id)}
                    className=" rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 border-solid border-2 border-dark-blue bg-white text-dark-blue flex h-auto items-center"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(label._id)}
                    className="rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 border-solid border-2 border-red-600 text-red-600 flex h-auto items-center cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {openModal && edit &&  (
        <ConfirmModal
          openModal={openModal}
          handleModal={handleModal}
          postId={postId}
        />
      )}
      {openModal && !edit && (
        <AddPost
          openModal={openModal}
          handleModal={handleModal}
          postId={postId}
        />
      )}
    </div>
  );
};

export default Posts;
