import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { SnackProps } from "../model/types";
const CustomSnackbar = (props: SnackProps) => {
  const { severity, message, alertTitle } = props;

  return (
    <div
      style={{ background: severity === "success" ? "#00F593" : "#FF0033" }}
      className="px-8 pb-2 relative w-[350px] h-[60px] rounded-md flex items-center text-center"
    >
      <div>
        <p>{alertTitle}</p>
        <div className="flex font-bold justify-between">
          <div className="w-[10%]">
            {severity === "success" ? <FaCheck  size={24}/> : <IoMdClose  size={24}/>}
          </div>
          <div className="w-[90%] ml-2 text-start">
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSnackbar;
