import { Link } from 'react-router-dom'
import products from '../data/products.json'
import ProductCard from './ProductCard'

function ProductsSection({ cart, onAdd }) {
  return <section className="products-section w-[80%]" id="products"><div className="section-heading"><h2>Premium Digital Tools</h2><p>Choose from our curated collection of premium digital products designed<br className="desktop-only" /> to boost your productivity and creativity.</p><div className="view-switch"><Link className="active" to="/#products">Products</Link><Link to="/cart">Cart ({cart.length})</Link></div></div><div className="product-grid">{products.map((product) => <ProductCard key={product.id} product={product} added={cart.some((item) => item.id === product.id)} onAdd={onAdd} />)}</div></section>
}

export default ProductsSection