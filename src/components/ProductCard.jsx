import { iconMap } from './catalog'

function ProductCard({ product, added, onAdd }) {
  return <article className="product-card transition-transform duration-200 hover:-translate-y-1"><span className={`product-tag ${product.tagType}`}>{product.tag}</span><div className="product-icon"><img src={iconMap[product.icon]} alt="" /></div><h3>{product.name}</h3><p>{product.description}</p><div className="product-price"><strong>${product.price}</strong><span>/{product.period}</span></div><ul>{product.features.map((feature) => <li key={feature}>{feature}</li>)}</ul><button className={`buy-button ${added ? 'added-button' : ''}`} onClick={() => onAdd(product)}>{added ? 'Already Added' : 'Buy Now'}</button></article>
}

export default ProductCard