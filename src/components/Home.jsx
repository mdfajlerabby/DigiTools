import bannerImage from '../assets/banner.png'
import Footer from './Footer'
import Pricing from './Pricing'
import ProductsSection from './ProductsSection'
import Steps from './Steps'

function Cta() {
  return <section className="cta"><h2>Ready To Transform Your Workflow?</h2><p>Join thousands of professionals who are already using DigiTools to work smarter.</p><div><a className="primary-button" href="#products">Explore Products</a><a className="outline-button" href="#pricing">View Pricing</a></div><small>14-day free trial · No credit card required · Cancel anytime</small></section>
}

function Home({ cart, onAdd }) {
  return <><main><section className="hero-section"><div className="hero-copy"><span className="announcement">✦ New: AI-Powered Tools Available</span><h1>Supercharge Your<br /><em>Digital Workflow</em></h1><p>Access premium AI tools, design assets, templates, and productivity software, all in one place. Start creating faster today.</p><div className="hero-actions"><a className="primary-button" href="#products">Explore Products</a><a className="outline-button" href="#steps">▷ Watch Demo</a></div></div><img className="hero-image" src={bannerImage} alt="Digital productivity tools" /></section><section className="stats"><div><strong>50K+</strong><span>Active Users</span></div><div><strong>200+</strong><span>Premium Tools</span></div><div><strong>4.9</strong><span>Rating</span></div></section><ProductsSection cart={cart} onAdd={onAdd} /><Steps /><Pricing /><Cta /></main><Footer /></>
}

export default Home