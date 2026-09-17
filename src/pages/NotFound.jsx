import { Link } from 'react-router'

function NotFound() {
  return <main className="cart-page"><div className="empty-cart"><div className="empty-icon">!</div><h1>Page Not Found</h1><p>The page you are looking for does not exist.</p><Link className="primary-button" to="/">Back To Home</Link></div></main>
}

export default NotFound