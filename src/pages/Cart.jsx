import { useOutletContext } from 'react-router'
import CartView from '../components/CartPage'

function Cart() {
  const { cart, removeFromCart, checkout } = useOutletContext()
  return <CartView cart={cart} onRemove={removeFromCart} onCheckout={checkout} />
}

export default Cart