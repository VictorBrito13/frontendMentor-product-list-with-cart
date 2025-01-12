import { IProduct } from '../../types/IProduct'

export default function Dessert(prop: IProduct) {

  const { image, name, category, price } = prop
  const { desktop, tablet, mobile } = image

  return (
    <div style={{ "width": "fit-content" }}>
        <figure className='position-relative mb-5'>
          <img
          className='object-fit-cover'
          srcSet={`${desktop} 502w, ${tablet} 427w, ${mobile} 654w`}
          sizes='
            (max-width: 426px) 300px,
            (max-width: 769px) 427px,
            300px
          '
          alt={name} />

          <button className='f-red-hat-semi-bold border-1 p-2 w-50 rounded-pill position-absolute top-100 start-50 translate-middle z-3'>
            <img src="./assets/images/icon-add-to-cart.svg" alt="add to cart" />
            Add to Cart
          </button>
        </figure>
        <div>
          <span>{category}</span>
          <p className='f-red-hat-bold'>{name}</p>
          <p className='f-red-hat-bold'>${price}</p>
        </div>
    </div>
  )
}