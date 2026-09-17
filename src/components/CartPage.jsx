import { Link, useNavigate } from 'react-router-dom'
import { iconMap } from './catalog'

function CartPage({ cart, onRemove, onCheckout }) {
  const navigate = useNavigate()
  const total = cart.reduce((sum, product) => sum + product.price, 0)
  return <main className="cart-page"><div className="section-heading"><h1>Premium Digital Tools</h1><p>Everything you need to work smarter and create better.</p><div className="view-switch"><Link to="/#products">Products</Link><Link className="active" to="/cart">Cart ({cart.length})</Link></div></div><section className="cart-panel"><h2>Your Cart</h2>{cart.length === 0 ? <div className="empty-cart"><div className="empty-icon">+</div><h3>Your cart is empty</h3><p>Explore our premium tools and find something that fits your workflow.</p><button className="buy-button compact" onClick={() => navigate('/#products')}>Explore Products</button></div> : <><div className="cart-items">{cart.map((product) => <div className="cart-item" key={product.id}><img src={iconMap[product.icon]} alt="" /><div><h3>{product.name}</h3><p>${product.price} <span>/ {product.period}</span></p></div><button className="remove-button" onClick={() => onRemove(product.id)}>Remove</button></div>)}</div><div className="cart-total"><span>Total</span><strong>${total}</strong></div><button className="checkout-button" onClick={onCheckout}>Proceed To Checkout</button></>}</section></main>
}

export default CartPage