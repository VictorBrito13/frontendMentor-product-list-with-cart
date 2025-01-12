import { useEffect, useState } from 'react'
import './App.css'
import Cart from './components/cart/Cart'
import Dessert from './components/dessert/Dessert'
import { IProduct } from './types/IProduct'

function App() {

  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    fetch("./data.json")
    .then(res => res.json())
    .then(json => setProducts(json))
  }, [])

  return (
    <div className='container justify-content-center d-grid d-md-flex'>
      {/* Desserts Container */}
      <div className='flex-grow-1'>
        <h1 className='f-red-hat-bold'>Desserts</h1>
        {
          products.length === 0 ?
          <h2 className='bg-danger text-light p-2 rounded-3'>There is no products</h2>
          :
          <div className='products-container'>
            {
              products.map((p, index) => <Dessert key={index} image={p.image} name={p.name} category={p.category} price={p.price} />)
            }
          </div>
        }
        {/* List of desserts */}
      </div>
      {/* Cart */}
    </div>
  )
}

export default App
