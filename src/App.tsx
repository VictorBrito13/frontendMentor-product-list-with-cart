import { useEffect, useState } from 'react'
import './App.css'
import Cart from './components/cart/Cart'
import Dessert from './components/dessert/Dessert'
import { IProduct } from './types/IProduct'

function App() {

  // Available products
  const [products, setProducts] = useState<IProduct[]>([])
  // Products in the cart
  const [cartProcucts, setCartProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch("./data.json")
    .then(res => res.json())
    .then(json => setProducts(json))
  }, [])

  return (
    <div className='container p-4 justify-content-center d-grid d-lg-flex'>
      {/* Desserts Container */}
      {/* Show the available products */}
      <div className='flex-grow-1'>
        <h1 className='f-red-hat-bold color-rose-900'>Desserts</h1>
        {
          products.length === 0 ?
          <h2 className='bg-danger text-light p-2 rounded-3'>There is no products</h2>
          :
          <div className='products-container'>
            {
              // Show available products
              products.map((p, index) => {
                const { image, name, category, price } = p
                return (
                  <Dessert key={index} setCartProducts={setCartProducts} product={{ image, name, category, price }} />
                )
              })
            }
          </div>
        }
        {/* List of desserts */}
      </div>
      {/* Cart */}
      <Cart products={cartProcucts} />
    </div>
  )
}

export default App
