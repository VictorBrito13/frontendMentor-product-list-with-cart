export default function Cart() {
  return (
    <div>
      <h2>Your Cart (7)</h2>
      {/* Products */}
      <div>
        <div>
          <h4>Classic Tiramisu</h4>
          {/* Button to remove the item */}
          <img src="./assets/images/icon-remove-item.svg" alt="remove" />
          {/* Info about the order */}
          <div>
            {/* Cuantity */}
            <span>1x</span>
            {/* Unit Price */}
            <span> $5.50 </span>
            {/* Total */}
            <span>$5.50</span>
          </div>
        </div>

        <div>
          <h4>Classic Tiramisu</h4>
          {/* Button to remove the item */}
          <img src="./assets/images/icon-remove-item.svg" alt="remove" />
          {/* Info about the order */}
          <div>
            {/* Cuantity */}
            <span>1x</span>
            {/* Unit Price */}
            <span> $5.50 </span>
            {/* Total */}
            <span>$5.50</span>
          </div>
        </div>

        <div>
          <h4>Classic Tiramisu</h4>
          {/* Button to remove the item */}
          <img src="./assets/images/icon-remove-item.svg" alt="remove" />
          {/* Info about the order */}
          <div>
            {/* Cuantity */}
            <span>1x</span>
            {/* Unit Price */}
            <span> $5.50 </span>
            {/* Total */}
            <span>$5.50</span>
          </div>
        </div>
      </div>

      {/* Order total */}
      <div>
        <p>Order Total</p>
        <p>$46.50</p>
      </div>

      {/* carbon-neutral advice */}
      <div>
        <img src="./assets/images/icon-carbon-neutral.svg" alt="carbon-neutral" />
        <span>This is a <b>carbon-neutral</b> delivery </span>
      </div>

      {/* Button to confirm order */}
      <button>Confirm Order</button>
    </div>
  )
}