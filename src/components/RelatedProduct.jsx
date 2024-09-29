import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/shopContext'
import ProductItem from './ProductItem';

const RelatedProduct = ({category, subCategory}) => {

    const {products} = useContext(ShopContext);
    const [related, setRelated] = useState([]);
    useEffect(()=>{
        if(products.length > 0){
            let productCopy = products.slice();
            productCopy = productCopy.filter((item)=> category === item.category);
            productCopy = productCopy.filter((item)=> subCategory === item.subCategory);
            
            setRelated(productCopy.slice(0,5))
        }
    },[products])
  return (
    
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
      {
        related.map((item, index)=>{
            return(
                    <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
                
            )
        })
      }
    </div>
  )
}

export default RelatedProduct
