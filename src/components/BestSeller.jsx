import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/shopContext'
import ProductItem from './ProductItem';
import Title from './Title';

const BestSeller = () => {
    const {products} = useContext(ShopContext);
    // console.log(products)
    const [bestSeller, setBestSeller] = useState([]);
// console.log(bestSeller);
    useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.bestseller));
        setBestSeller(bestProduct.slice(0,5));
    },[])

  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'SEST'} text2={'SELLER'} />
            <p className='text-sm text-gray-600 text-center mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quaerat placeat perspiciatis quis ratione!
            </p>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-col-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            bestSeller.map((item, index)=>{
                return(

                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                )
            })
        }
    </div>
        </div>
    </div>
    
  )
}

export default BestSeller
