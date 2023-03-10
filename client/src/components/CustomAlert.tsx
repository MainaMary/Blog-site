import React from "react";
import { useEffect } from "react";

interface Props {
  title: string;
  message: string;
  severity: "error" | "warning" | "success" | "info";
  openSnack: boolean;
  setOpenSnack: React.Dispatch<React.SetStateAction<boolean>>;
}
const CustomAlert = ({
  title,
  message,
  openSnack,
  setOpenSnack,
  severity,
}: Props) => {
  const handleClose = () => {
    if (!openSnack) {
      return null;
    }
    console.log("close alert");
    setOpenSnack(false);
  };
  useEffect(() => {
    setTimeout(() => {
      handleClose();
    }, 1000);
  }, []);
  return (
    <div
    style={{ background: severity === "success" ? "#00F593" : "#FF0033" }}
      className="px-4 py-3 rounded relative top-10 w-2/4 m-auto "
      role="alert"
    >
      <strong className="font-bold">{title}</strong>
      <p className="block sm:inline">{message}</p>
      <div onClick={handleClose}>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg
            className="fill-current h-6 w-6"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default CustomAlert;
