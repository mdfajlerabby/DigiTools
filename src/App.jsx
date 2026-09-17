import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import './App.css'
import MainLayout from './layouts/MainLayout'
import Cart from './pages/Cart'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'cart',
        Component: Cart,
      },
      {
        path: '*',
        Component: NotFound,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
