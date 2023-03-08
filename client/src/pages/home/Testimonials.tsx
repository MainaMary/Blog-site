import React, { useEffect } from "react";
import { PhotoProps } from "../../model/types";
import { fetchPhotos } from "../../slice/PhotosSlice";
import { fetchComments } from "../../slice/CommentsSlice";
import { useAppSelector, useAppDispatch } from "../../store/Store";
interface Props {
  email:string
}
 export const EmailWrap = ({ email }: Props) => {
  return <p className="mb-8">{email}</p>;
};
const Testimonials = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPhotos());
    dispatch(fetchComments());
  }, []);
  const state = useAppSelector((state) => state.photos);
  const comments = useAppSelector((state) => state.comments);
  const email = comments?.commentItems.slice(0, 4).map((name) => name.email);
  const body = comments?.commentItems.slice(0, 4).map((name) => name.body);
  
  return (
    <div className=" my-8 m-auto justify-items-center grid  grid-cols-1 md:grid-cols-4 gap-2">
      {state?.data.slice(0, 4).map((label: PhotoProps, index:number) => {
        return (
          <div
            className="shadow-md w-[95%]  text-center rounded-md bg-white px-3 py-4">
            <img
              src={label.url}
              alt={label?.title}
              className="w-[30px] h-[30px] rounded-full m-auto"
            />
            <p className="my-2 text-dark-gray">{email[index].split('@')[0]}</p>
            <p>{body[index].slice(0, 50)}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Testimonials;
