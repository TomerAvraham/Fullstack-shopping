import React, {useState, useEffect} from 'react'
import ProductsList from './components/ProductsList'
import Cart from './components/Cart'


function App() {
  const [cartItems, setCartItems] = useState([])
  const [cartTotal, setCartTotal] = useState([])
  const [cartChange, setCartChange] = useState({})

  const fetchCartItems = async () => {
      const res = await fetch('http://localhost:1000/cart')
      const data = await res.json()
      setCartItems(data)
  }

  const fetchTotalCart = async () => {
      const res = await fetch('http://localhost:1000/cart/sum')
      const data = await res.json()
      setCartTotal(data)
  }

  const handelAddToCart = async (id) => {
    const res = await fetch('http://localhost:1000/cart/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({product_id:id})
    })
    const data = await res.json()
    setCartChange(data)
  }

  const handelDeleteFromCart = async (id) => {
    const res = await fetch(`http://localhost:1000/cart/delete/${id}`, {
      method: 'DELETE'
    })
    const data = await res.json()
    setCartChange(data)
  }


  useEffect(() => {
      fetchTotalCart()
      fetchCartItems()
  },[cartChange])

  return (
    <div className="app">
      <ProductsList handelAddToCart={handelAddToCart}/>
      <Cart handelDeleteFromCart={handelDeleteFromCart} cartItems={cartItems} cartTotal={cartTotal}/>
    </div>
  )
}

export default App
