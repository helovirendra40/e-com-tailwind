import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLatterBox from '../components/NewsLatterBox'

const Contact = () => {
  return (
    <>
    <div className=' text-center font-medium text-3xl'>
      <Title text1={'Contact'} text2={'Us'} />
    </div>
    <div className='my-10 flex flex-col md:flex-row gap-16 '>
      <img className='w-full md:max-w-[450px]' src={assets.contact_img} alt="" />
      <div>
          <h2 className='font-medium text-2xl'>Information</h2>
          <p className='text-gray-700'><span className='font-semibold'>Email</span> Virendragangwar88@gmail.com</p>
          <p className='text-gray-700'><span className='font-semibold'>Phone</span> +91 88XXXXXXX</p>
          <form className='my-10 w-full'>
            <div className='flex flex-col gap-3'>
              <input className='px-2 py-2 border outline-none rounded-md' type="text" placeholder='name' />
              <input className='px-2 py-2 border outline-none rounded-md' type="email" placeholder='Email' />
              <input className='px-2 py-2 border outline-none rounded-md' type="text" placeholder='Phone' />
              <button className='py-2 px-6 text-white my-3 border-none bg-black active:bg-black-500'>SUBMIT</button>
            </div>
          </form>
        </div>
    </div>
    <NewsLatterBox />
    </>
  )
}

export default Contact
