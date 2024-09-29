import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import Title from './Title'

const CartTotal = () => {
    const {currency, delivery_fee, getCartAmount} = useContext(ShopContext)
  return (
    <>
    {
        getCartAmount() > 0 ? <div className='w-full'>
        <div className='text-2xl '>
            <Title text1={'Cart'} text2={'Total'} />
        </div>
        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                <p>Sub Total</p>
                <p>{currency} {getCartAmount()}.00</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p>Delivery Fee</p>
                <p>{delivery_fee}</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p>Total Amount</p>
                <p>{currency}{delivery_fee + getCartAmount()}</p>
            </div>
        </div>
    </div> : null
    }
    </>
    
  )
}

export default CartTotal
