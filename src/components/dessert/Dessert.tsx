import { useState } from 'react'
import { IProduct } from '../../types/IProduct'

interface IComponentProps {
  product: IProduct,
  setCartProducts: Function
}


// This component needs the product and the function to add products
export default function Dessert(props: IComponentProps) {

  const { product, setCartProducts } = props

  const { image, name, category, price } = product
  const { desktop, tablet, mobile } = image
  const [ productSelected, setProductSelected ] = useState(false)
  const [ productQuantity, setProductQuantity ] = useState(1)

  function addToCart() {
    if(productQuantity === 0) {
      setProductQuantity(1)
    }

    // Push product to cart

    setProductSelected(true)
  }

  function incrementQuantity() {
    setProductQuantity(productQuantity+1)

    // Search for the product, delete product, add the same product with the specified quantity

  }

  function decrementQuantity() {
    setProductQuantity(prevQuantity => {
      let currentState = prevQuantity - 1

      if(currentState < 0) return 0;
      console.log(currentState);

      if(currentState === 0) {
        setProductSelected(false);
      }

      // Search for the product, delete product, add the same product with the specified quantity

      return currentState;
    })
  }

  return (
    <div style={{ "width": "fit-content" }}>
        <figure className='position-relative mb-5'>
          <img
          className={`object-fit-cover rounded-3 ${productSelected && 'outline-red'}`}
          srcSet={`${desktop} 502w, ${tablet} 427w, ${mobile} 654w`}
          sizes='
            (max-width: 426px) 300px,
            (max-width: 769px) 427px,
            300px
          '
          alt={name} />

          <button
            onClick={ addToCart }
            className={
              `
              f-red-hat-semi-bold
              ${productSelected === false && 'color-red-hover'}
              color-rose-900
              bg-rose-50
              border-red border-1
              p-2 w-75 rounded-pill
              position-absolute top-100 start-50 translate-middle
              ${productSelected && 'bg-red d-flex justify-content-around align-items-center'}
              `
            }
          >
            {
              productSelected &&
              <img
              onClick={decrementQuantity}
              height={27.6} width={27.6}
              className='action p-2 rounded-circle border border-1 border-light'
              src='./assets/images/icon-decrement-quantity.svg' />
            }
            {/* Text describing the cuantity of the selected product */}
            {
              productSelected &&
              <span>{productQuantity}</span>
            }

            {/* Text in case the product is not marked as selected */}
            {
              productSelected === false &&
              <>
                <img src="./assets/images/icon-add-to-cart.svg" alt="add to cart" />
                Add to Cart
              </>
            }
            {
              productSelected &&
              <img
              onClick={incrementQuantity}
              height={27.6} width={27.6}
              className='action p-2 rounded-circle border border-1 border-light'
              src='./assets/images/icon-increment-quantity.svg' />
            }
          </button>
        </figure>
        <div>
          <span className='color-rose-400'>{category}</span>
          <p className='f-red-hat-bold'>{name}</p>
          <p className='f-red-hat-semi-bold color-red'>${price.toFixed(2)}</p>
        </div>
    </div>
  )
}