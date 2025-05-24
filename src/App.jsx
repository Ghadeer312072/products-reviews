import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ContaxtProducts from './components/ContaxtProducts'
import Products from '../pages/Products'
import ProductDetails from '../pages/ProductDetails'
import ReviewProvider from './components/ReviewProvider'




function App() {


  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<ContaxtProducts><Products /></ContaxtProducts>} />
        <Route path="details/:id" element={
          <ContaxtProducts>
            <ReviewProvider>
              <ProductDetails />
            </ReviewProvider >
          </ContaxtProducts>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
