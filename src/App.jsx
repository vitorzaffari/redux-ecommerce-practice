import './App.css'
import Products from './components/Products'
import Dashboard from './components/Dashboard'
import Cart from './components/Cart'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './components/RootLayout'
function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Dashboard />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Route>
  ))
  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
