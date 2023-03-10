import React from 'react'
import BlogImg from "../../assets/blogging.svg";
import Testimonials from './Testimonials';
import CustomButton from '../../components/CustomButton';
import CustomTitle from "../../components/CustomTitle";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
  return (

   <div>
     <div className=' block md:flex h-auto items-center gap-3 mt-16'>
      <div className='w-full md:w-[40%]'>
      <span className='text-dark-blue capitalize font-semibold text-4xl'> Welcome to our blog! <br/></span>
        <p className=' text-xl mt-4'>
     
        We are passionate about sharing our knowledge and insights on [topic/niche] with our readers. Our goal is to provide valuable content that helps you learn, grow, and achieve your goals. 
        </p>
       <div className='mt-8'>
        <CustomButton onClick={() => navigate('/register')}>Get started</CustomButton>
       </div>
      </div>
      <div className='w-full md:w-[60%]'>
        <img src={BlogImg} className="h-[400px]"/>
      </div>
    </div>
    <div className='mt-8'>
      <CustomTitle>Testimonials</CustomTitle>
      <Testimonials/>
      <div>

      </div>

    </div>
   </div>
  )
}

export default Home