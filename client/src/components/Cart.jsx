import React, {useState, useEffect} from 'react'
import CartItem from './CartItem'

function Cart({cartItems, cartTotal, handelDeleteFromCart}) {
    console.log(cartItems)

    return (
        <div className='cart__container'>
            <div className="cart__items">
                {cartItems.map((product, i) => (
                    <CartItem handelDeleteFromCart={handelDeleteFromCart} product={product} key={i}/>
                ))}
            </div>
            <div className="cart__total">
                <h1>{cartTotal.length && cartTotal[0]['sum(products.price)']}</h1>
            </div>
        </div>
    )
}

export default Cart
