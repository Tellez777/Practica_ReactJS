import CartElements from './CartElements'
import React from 'react'
import CartTotal from './CartTotal'
import Navbar from '../Navbar/Navbar'

import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CartContent = () => {

  const {cart} = useContext(dataContext)


return cart.length > 0 ? (
  <>
    <Navbar/>
    <CartElements />
    <CartTotal />
  </>
  ) : (
    <>
    <Navbar/>
    <h2 className='cart-message-center'>Your cart is empty</h2>
    </>
  )
}

export default CartContent