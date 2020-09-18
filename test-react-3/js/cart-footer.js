function CartFooter(props) {
  return (
    <section className="container">
     {props.numberItems == 0 ? (
       ""
     ) : (
      <div>
        <div className="promotion">
      <label htmlFor="promo-code">Have A Promo Code?</label>
      <input type="text" id="promo-code" /> <button type="button" />
    </div>
    <div className="summary">
      <ul>
        <li>
          Subtotal <span>${props.subTotal}</span>
        </li>
        <li>
          Tax <span>${props.tax}</span>
        </li>
        <li className="total">
          Total <span>${props.toTal}</span>
        </li>
      </ul>
    </div>
    <div className="checkout">
      <button type="button">Check Out</button>
    </div>
      </div>
     )}
    </section>
  );
}
