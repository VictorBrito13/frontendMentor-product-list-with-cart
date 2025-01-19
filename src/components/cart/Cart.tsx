export default function Cart() {
  return (
    <div className="bg-rose-50 rounded-3 h-50 p-3">
      <h2 className="color-red f-red-hat-semi-bold">Your Cart (7)</h2>
      {/* Products */}
      <div className="container">
        <div className="row border-bottom">
          <div className="col-9">
            <h4 className="f-red-hat-semi-bold">Classic Tiramisu</h4>
            {/* Info about the order */}
            <div className="d-flex justify-content-between">
              {/* Cuantity */}
              <span className="color-red f-red-hat-semi-bold">1x</span>
              {/* Unit Price */}
              <span className="color-rose-400">@ $5.50 </span>
              {/* Total */}
              <span className="color-rose-500 f-red-hat-semi-bold">$5.50</span>
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

        <div className="row border-bottom">
          <div className="col-9">
            <h4 className="f-red-hat-semi-bold">Classic Tiramisu</h4>
            {/* Info about the order */}
            <div className="d-flex justify-content-between">
              {/* Cuantity */}
              <span className="color-red f-red-hat-semi-bold">1x</span>
              {/* Unit Price */}
              <span className="color-rose-400">@ $5.50 </span>
              {/* Total */}
              <span className="color-rose-500 f-red-hat-semi-bold">$5.50</span>
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

        <div className="row border-bottom">
          <div className="col-9">
            <h4 className="f-red-hat-semi-bold">Classic Tiramisu</h4>
            {/* Info about the order */}
            <div className="d-flex justify-content-between">
              {/* Cuantity */}
              <span className="color-red f-red-hat-semi-bold">1x</span>
              {/* Unit Price */}
              <span className="color-rose-400">@ $5.50 </span>
              {/* Total */}
              <span className="color-rose-500 f-red-hat-semi-bold">$5.50</span>
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
      </div>

      {/* Order total */}
      <div className="color-rose-900 my-4 d-flex justify-content-between">
        <p>Order Total</p>
        <p className="f-red-hat-bold">$46.50</p>
      </div>

      {/* carbon-neutral advice */}
      <div className="bg-rose-100 p-3 mb-4 text-center rounded-3">
        <img src="./assets/images/icon-carbon-neutral.svg" alt="carbon-neutral" />
        <span>This is a <b>carbon-neutral</b> delivery </span>
      </div>

      {/* Button to confirm order */}
      <button className="w-100 p-2 rounded-pill border-0 bg-red bg-red-darker-hover">Confirm Order</button>
    </div>
  )
}