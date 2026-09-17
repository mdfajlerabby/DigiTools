import packageImage from '../assets/package.png'
import rocketImage from '../assets/rocket.png'
import userImage from '../assets/user.png'

const steps = [['01', userImage, 'Create Account', 'Sign up for free in seconds. No credit card required to get started.'], ['02', packageImage, 'Choose Products', 'Browse our catalog and select the tools that fit your needs.'], ['03', rocketImage, 'Start Creating', 'Download and start using your premium tools immediately.']]

function StepCard({ number, image, title, text }) {
  return <article className="step-card"><span className="step-number">{number}</span><div className="step-icon"><img src={image} alt="" /></div><h3>{title}</h3><p>{text}</p></article>
}

function Steps() {
  return <section className="steps-section" id="steps"><div className="section-heading"><h2>Get Started In 3 Steps</h2><p>Start using premium digital tools in minutes, not hours.</p></div><div className="steps-grid">{steps.map(([number, image, title, text]) => <StepCard key={number} number={number} image={image} title={title} text={text} />)}</div></section>
}

export default Steps