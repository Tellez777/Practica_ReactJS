import React from 'react'
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const TotalItems = () => {
    const { cart } = useContext(dataContext)

    const itemsTotal = cart.reduce((accumulator, element) => accumulator + element.quantity, 0)

  return (
    <span className='cart-items-total'>
        {itemsTotal}
    </span>
  )
}

export default TotalItems