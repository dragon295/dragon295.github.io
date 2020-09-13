function CartFooter(props) {
  const product = props.products;
  let subtotal = (product[0].price * product[0].quantity) + (product[1].price * product[1].quantity)
  let tax = subtotal / 10;
  let total = subtotal + tax;
  return (
    <section className="container">
      <div className="promotion">
        <label htmlFor="promo-code">Have A Promo Code?</label>
        <input type="text" id="promo-code" /> <button type="button" />
      </div>
      <div className="summary">
        <ul>
          <li>Subtotal <span>${subtotal}</span></li>
          <li>Tax <span>${tax}</span></li>
  <li className="total">Total <span>${total}</span></li>
        </ul>
      </div>
      <div className="checkout">
        <button type="button">Check Out</button>
      </div>
    </section>
  )
}