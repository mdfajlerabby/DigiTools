import { useState } from 'react'
import { Outlet } from 'react-router'
import { toast, ToastContainer } from 'react-toastify'
import Header from '../components/Header'

function MainLayout() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    if (cart.some((item) => item.id === product.id)) {
      toast.info(`${product.name} is already in your cart`)
      return
    }
    setCart([...cart, product])
    toast.success(`${product.name} added to cart`)
  }

  const removeFromCart = (id) => {
    const product = cart.find((item) => item.id === id)
    setCart(cart.filter((item) => item.id !== id))
    toast.info(`${product.name} removed from cart`)
  }

  const checkout = () => {
    setCart([])
    toast.success('Checkout complete. Your tools are ready!')
  }

  return <><Header cartCount={cart.length} /><Outlet context={{ cart, addToCart, removeFromCart, checkout }} /><ToastContainer position="bottom-right" autoClose={2400} hideProgressBar theme="light" /></>
}

export default MainLayout