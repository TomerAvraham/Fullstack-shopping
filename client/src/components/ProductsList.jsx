import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import Product from './Product'


function ProductsList({handelAddToCart}) {
    const [products, setProducts] = useState([])

    const fetchAllProducts = async () => {
        const res = await fetch('http://localhost:1000/products')
        const data = await res.json()
        setProducts(data)
    }

    useEffect(() => {
        fetchAllProducts()
    },[])

    return (
        <div className="product__list">
            <h1>Welcom to my Shop</h1>
            <Grid container spacing={3} className="products__container">
                {products && products.map((product, i) => (
                    <Grid item>
                        <Product handelAddToCart={handelAddToCart} key={i} product={product}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default ProductsList
