import React,{useState} from "react"
const useModal = () => {
const [openModal, setOpenModal] = useState<boolean>(false)
const handleModal = () =>{
    setOpenModal(prev => !prev)
}
    return {openModal, handleModal}
}
export default useModal