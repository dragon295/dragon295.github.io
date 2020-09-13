function CartHeader(props) {
  return (
    <header className="container">
      <h1>{props.products[2].name}</h1>
      <ul className="breadcrumb">
        <li>Home</li>
        <li>Shopping Cart</li>
      </ul>
      <span className="count">{props.products[2].item} items in the bag</span>
    </header>
  )
}
