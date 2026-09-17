import { useOutletContext } from 'react-router'
import HomeView from '../components/Home'

function Home() {
  const { cart, addToCart } = useOutletContext()
  return <HomeView cart={cart} onAdd={addToCart} />
}

export default Home