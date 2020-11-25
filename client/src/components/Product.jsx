import React from 'react'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


function Product({product, handelAddToCart}) {

    return (
        <div>
            <Paper elevation={4} className="product">
                <h3>{product.name}</h3>
                <h5>{product.price}$</h5>
                <Button onClick={() => handelAddToCart(product.id)} variant="contained" color="primary">Add</Button>
            </Paper>
        </div>
    )
}

export default Product

