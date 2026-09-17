const plans = [{ name: 'Starter', price: '0', description: 'Perfect for getting started', features: ['Access to 10 free tools', 'Basic templates', 'Community support', '1 project per month'], button: 'Get Started Free' }, { name: 'Pro', price: '29', description: 'Best for professionals', features: ['Access to all premium tools', 'Unlimited templates', 'Priority support', 'Unlimited projects', 'Early access', 'Advanced analytics'], button: 'Start Pro Trial', featured: true }, { name: 'Enterprise', price: '99', description: 'For teams and businesses', features: ['Everything in Pro', 'Team collaboration', 'Custom integrations', 'Dedicated support', 'SLA guarantee', 'Custom branding'], button: 'Contact Sales' }]

function PlanCard({ plan }) {
  return <article className={`plan ${plan.featured ? 'featured' : ''}`}>{plan.featured && <span className="most-popular">Most Popular</span>}<h3>{plan.name}</h3><p>{plan.description}</p><div className="plan-price"><strong>${plan.price}</strong><span>/Month</span></div><ul>{plan.features.map((feature) => <li key={feature}>{feature}</li>)}</ul><button className="buy-button">{plan.button}</button></article>
}

function Pricing() {
  return <section className="pricing-section w-[80%]" id="pricing"><div className="section-heading"><h2>Simple, Transparent Pricing</h2><p>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p></div><div className="pricing-grid">{plans.map((plan) => <PlanCard key={plan.name} plan={plan} />)}</div></section>
}

export default Pricing