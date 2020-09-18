function CartBody({ products, confirmRemove, handleChangeQuantity}) {
  //ES5: const products = props.products;
  //ES6: const { products } = props;
  const productList = products.map(product => <li className="row" key={product.id}>
    <div className="col left">
      <div className="thumbnail">
        <a href="#">
          <img src={product.image} alt={product.name} />
        </a>
      </div>
      <div className="detail">
        <div className="name">
          <a href="#">{product.name}</a>
        </div>
        <div className="description">{product.description}</div>
        <div className="price">${product.price}</div>
      </div>
    </div>
    <div className="col right">
      <div className="quantity">
        <input
          type="number"
          className="quantity"
          step={1}
          value={product.quantity}
          onChange={(event) => handleChangeQuantity(product.id, event)}
        />
      </div>
      <div className="remove">
        <svg
          version="1.1"
          className="close"
          xmlns="//www.w3.org/2000/svg"
          xmlnsXlink="//www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 60 60"
          enableBackground="new 0 0 60 60"
          xmlSpace="preserve"
          onClick={() => confirmRemove(product)}
        >
          <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
        </svg>
      </div>
    </div>
  </li>)
  return (
    <section className="container">
     {products.length > 0 ? (
        <ul className="products">{productList}</ul>
     ) : (
       <div>
         <h2>Không có sản phẩm nào trong giỏ</h2>
       </div>

     ) }
    </section>
  );
}
