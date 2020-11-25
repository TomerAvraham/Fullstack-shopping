import React from 'react'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function CartItem({product, handelDeleteFromCart}) {
    return (
        <Paper elevation={3} className="cart__item">
            <Button onClick={() => handelDeleteFromCart(product.id)}>
                <DeleteForeverIcon/>
            </Button>
            <p>{product.name}</p>
            <p>{product.price}</p>
        </Paper>
    )
}

export default CartItem
