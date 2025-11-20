import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './Redux/store.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartPage from './Pages/CartPage.jsx'
import AboutPage from './Pages/AboutPage.jsx'
import DynamicProduct from './Pages/DynamicProduct.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>

      <BrowserRouter>
      <Routes >
        <Route path='/' element={<App />}></Route>
        <Route path='/cart' element={<CartPage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/products/:name' element={<DynamicProduct />}></Route>
      </Routes>
      </BrowserRouter>



    </Provider>
  </StrictMode>,
)
