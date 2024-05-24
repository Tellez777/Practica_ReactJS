import React from 'react'
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CartItemCounter = ({ product }) => {

    const { cart, setCart, buyProduct } = useContext(dataContext)

    const decrease = () => {
        const productRepeated = cart.find((item) => item.id === product.id)
    
        productRepeated.quantity !== 1 && setCart(cart.map((item) => (item.id === product.id ? { ...product, quantity: productRepeated.quantity - 1 } : item)))
    }

    return (
        <>
            <p className='counter-button' onClick={() => decrease(product)}>-</p>
            <p>{product.quantity}</p>
            <p className='counter-button' onClick={() => buyProduct(product)}>+</p>
        </>
    )
}

export default CartItemCounter