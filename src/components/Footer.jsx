import { Link } from 'react-router-dom'

function Footer() {
  return <footer id="footer"><div className="footer-main"><div><Link className="brand" to="/">DigiTools</Link><p>Premium digital tools for creators,<br /> professionals, and businesses. Work smarter<br /> with a suite of powerful tools.</p></div><div><h4>Product</h4><a href="#products">Features</a><a href="#pricing">Pricing</a><a href="#products">Templates</a><a href="#products">Integrations</a></div><div><h4>Company</h4><a href="#footer">About</a><a href="#footer">Blog</a><a href="#footer">Careers</a><a href="#footer">Press</a></div><div><h4>Resources</h4><a href="#footer">Documentation</a><a href="#footer">Help Center</a><a href="#footer">Community</a><a href="#footer">Contact</a></div><div><h4>Social Links</h4><div className="socials"><a href="#footer">◎</a><a href="#footer">in</a><a href="#footer">𝕏</a></div></div></div><div className="footer-bottom"><span>© 2026 DigiTools. All rights reserved.</span><span>Privacy Policy | Terms of Service | Cookies</span></div></footer>
}

export default Footer