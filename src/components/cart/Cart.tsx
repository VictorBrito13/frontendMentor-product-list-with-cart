import { IProduct } from "../../types/IProduct"

interface IComponentProps {
  products: IProduct[]
}

export default function Cart(props: IComponentProps) {

  const { products } = props;
  let totalToPay = 0;

  const mql = window.matchMedia("(max-width: 769px)")
  const isMobile = mql.matches
  console.log(isMobile);
  

  return (
    <div className={`h-md-100 bg-rose-50 rounded-3 ${isMobile ? 'h-100' : 'h-50'} p-3`}>
      <h2 className="color-red f-red-hat-semi-bold">Your Cart ({products.length})</h2>
      {/* Products */}
      {
        products.length > 0 ?
          <>
            <div className="container">
              {
                products.map((p, index) => {
                  // Compute the total of the cart
                  if (!p.quantity) {
                    throw new Error("You need an quantity for this product")
                  }

                  totalToPay += p.price * p.quantity

                  return (
                    <div key={index} className="row border-bottom">
                      <div className="col-9">
                        <h4 className="f-red-hat-semi-bold">{p.name}</h4>
                        {/* Info about the order */}
                        <div className="d-flex justify-content-between">
                          {/* Cuantity */}
                          <span className="color-red f-red-hat-semi-bold">{p.quantity}</span>
                          {/* Unit Price */}
                          <span className="color-rose-400">@ ${p.price} </span>
                          {/* Total */}
                          <span className="color-rose-500 f-red-hat-semi-bold">${p.quantity ? p.price * p.quantity : "There is no specified quantity"}</span>
                        </div>
                      </div>
                      <div className="col d-flex align-items-center justify-content-center">
                        {/* Button to remove the item */}
                        <button
                          style={{ width: "20px", height: "20px" }}
                          className="
              d-flex justify-content-center align-items-center
              border-0 outline-rose-500 filter-1-hover rounded-circle
              bg-transparent"
                        >
                          <img src="./assets/images/icon-remove-item.svg" alt="remove" />
                        </button>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            {/* Order total */}
            <div className="color-rose-900 my-4 d-flex justify-content-between">
              <p>Order Total</p>
              <p className="f-red-hat-bold">${totalToPay.toFixed(2)}</p>
            </div>

            {/* carbon-neutral advice */}
            <div className="bg-rose-100 p-3 mb-4 text-center rounded-3">
              <img src="./assets/images/icon-carbon-neutral.svg" alt="carbon-neutral" />
              <span>This is a <b>carbon-neutral</b> delivery </span>
            </div>

            {/* Button to confirm order */}
            <button className="w-100 p-2 rounded-pill border-0 bg-red bg-red-darker-hover">Confirm Order</button>
          </>
          :
          <figure className="text-center">
            <img src="assets/images/illustration-empty-cart.svg" alt="No products in cart" />
            <figcaption>Your added items will appear here</figcaption>
          </figure>
      }
    </div>
  )
}