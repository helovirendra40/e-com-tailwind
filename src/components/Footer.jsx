import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>

            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:2/3 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, et, fugiat incidunt dolorum eligendi, corrupti dolore minima laborum obcaecati odio non accusamus laboriosam. Ullam, saepe? Voluptates, facere nostrum! Qui similique molestiae nam, fugit magni beatae sequi ipsum, officiis labore ex ea magnam repellendus quas repudiandae, numquam in. Praesentium, odit fugiat.
            </p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col text-gray-600 gap-1'>
                <li>HOME</li>
                <li>About Us</li>
                <li>Deliver</li>
                <li>Privacy Policy </li>

            </ul>
        </div>
        <div >
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col text-gray-600 gap-1'>
                <li>+91 8285484247</li>
                <li>virendragangwar88@gmail.com</li>
            </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className='text-center font-sm text-gray-600 py-5'>All copyright are reserved by user</p>
      </div>
    </div>
  )
}

export default Footer
