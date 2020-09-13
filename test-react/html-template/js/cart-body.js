function CartBody(props) {
  return (
    <section className="container">
      <ul className="products">
        <li className="row">
          <div className="col left">
            <div className="thumbnail">
              <a href="#">
                <img src={props.products[0].image}/>
              </a>
            </div>
            <div className="detail">
              <div className="name"><a href="#">{props.products[0].name}</a></div>
              <div className="description">
              {props.products[0].description}
                </div>
              <div className="price">${props.products[0].price}</div>
            </div>
          </div>
          <div className="col right">
            <div className="quantity">
              <input type="number" className="quantity" step={1} defaultValue={props.products[0].quantity} />
            </div>
            <div className="remove">
              <svg version="1.1" className="close" xmlns="//www.w3.org/2000/svg" xmlnsXlink="//www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60 60" enableBackground="new 0 0 60 60" xmlSpace="preserve">
                <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
              </svg>
            </div>
          </div>
        </li>
        <li className="row">
          <div className="col left">
            <div className="thumbnail">
              <a href="#">
                <img src={props.products[1].image} />
              </a>
            </div>
            <div className="detail">
              <div className="name"><a href="#">{props.products[1].name}</a></div>
              <div className="description">
              {props.products[1].description}
                </div>
              <div className="price">${props.products[1].price}</div>
            </div>
          </div>
          <div className="col right">
            <div className="quantity">
              <input type="number" className="quantity" step={1} defaultValue={props.products[1].quantity} />
            </div>
            <div className="remove">
              <svg version="1.1" className="close" xmlns="//www.w3.org/2000/svg" xmlnsXlink="//www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60 60" enableBackground="new 0 0 60 60" xmlSpace="preserve">
                <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
              </svg>
            </div>
          </div>
        </li>
      </ul>
    </section>
  )
}