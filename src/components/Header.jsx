import { Link } from 'react-router-dom'

function Header({ cartCount }) {
  return <header className="site-header mx-auto w-[80%] max-w-[1040px]"><Link className="brand" to="/">DigiTools</Link><nav><a href="#products">Products</a><a href="#steps">Features</a><a href="#pricing">Pricing</a><a href="#footer">Testimonials</a><a href="#footer">FAQ</a></nav><div className="header-actions"><Link className="cart-link" to="/cart" aria-label={`Open cart with ${cartCount} items`}><span aria-hidden="true">🛒</span>{cartCount > 0 && <b>{cartCount}</b>}</Link><Link className="login" to="/cart">Login</Link><Link className="header-cta" to="/cart">Get Started</Link></div><button className="mobile-cart" aria-label="Open cart"><Link to="/cart">🛒 {cartCount}</Link></button></header>
}

export default Header