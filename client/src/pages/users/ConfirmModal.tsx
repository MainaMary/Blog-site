import React, { useState } from "react";
import CustomModal from "../../components/CustomModal";
import CustomSnackbar from "../../components/CustomSnackbar";
import CustomAlert from "../../components/CustomAlert";
import CustomButton from "../../components/CustomButton";
import { useDeletePostMutation } from "../../features/user/userPostApi";
import { DataProp } from "../../model/types";
interface ModalProps {
  openModal: boolean;
  handleModal: () => void;
  postId: string | null;
}
export type SnackbarProps = {
    title: string;
    content: string;
    severity: any;
  };
const ConfirmModal = ({ openModal, handleModal, postId }: ModalProps) => {
  const [message, setMessage] = useState("");
  const [openSnack, setOpenSnack] = useState(false);
  const [snackbar, setSnackbar] = useState<SnackbarProps>({
    title: "",
    content: "",
    severity: "",
  });
  if (!openModal) return null;
  const [deletePost] = useDeletePostMutation();
  

  const deleteHandler = async (e: any) => {
    e.preventDefault();
    const res: any = await deletePost(postId);
    console.log(res, "res");
    if (res?.data?.status) {
        // <CustomSnackbar
        //   severity="success"
        //   alertTitle="Success"
        //   message="Post deleted successfully"
        // />;
        setOpenSnack(true);
      handleModal();
    }
  };
 
  const handleAlert = (snackbar: SnackbarProps) => {
    const { title, content, severity } = snackbar;
    return (
      <CustomAlert
        title={title}
        message={content}
        severity={severity}
        openSnack={openSnack}
        setOpenSnack={setOpenSnack}
      />
    );
  };
  return (
    <CustomModal>
      <form
        onSubmit={deleteHandler}
        className="w-full md:w-[30%] shadow-lg rounded-2xl m-auto bg-white px-8 py-3  h-auto"
      >
        <div>{openSnack && handleAlert(snackbar)}</div>
        <p></p>
        <div className="flex justify-between">
          <p>Confirm</p>
          <p className="cursor-pointer" onClick={handleModal}>
            X
          </p>
        </div>
        <p>Are you sure you want to delete?</p>
        <div className="flex justify-between">
          <button className="rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 border-solid border-2 border-red-600 text-red-600 flex h-auto items-center cursor-pointer">
            Delete
          </button>
          <CustomButton onClick={handleModal}>Cancel</CustomButton>
        </div>
      </form>
    </CustomModal>
  );
};

export default ConfirmModal;
