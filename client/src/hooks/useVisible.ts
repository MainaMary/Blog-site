import React ,{useState} from 'react'


const useVisible = () => {
    const [visible, setVisible] = useState<boolean>(false)
    const handleVisisble = () =>{
        setVisible(prev => !prev)
    }
  return {visible, handleVisisble}
}

export default useVisible