import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import NewsLatterBox from '../components/NewsLatterBox'

const About = () => {
  return (
    <>
    <div className=' text-center font-medium text-3xl'>
      <Title text1={'About'} text2={'Us'} />
    </div>
    <div className='my-10 flex flex-col md:flex-row gap-16 '>
      <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ut veniam officiis error et pariatur a voluptates obcaecati nemo, aliquid recusandae temporibus culpa, optio aspernatur veritatis voluptas at ratione quis vel amet nam. Autem dicta ducimus eligendi! Mollitia, voluptas commodi.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore dolor fuga commodi dolore cumque harum accusantium nam rerum inventore cum.</p>
      </div>
    </div>
    <NewsLatterBox />
    </>
  )
}

export default About
