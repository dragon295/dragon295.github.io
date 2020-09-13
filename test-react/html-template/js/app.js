  const PRODUCTS = [
    {
      id: 1,
      name: "Product 1",
      description: "Discription 1",
      image: "sp-1.jpg",
      price: 10,
      quantity: 2
    },
    {  
      id: 2,
      name: "Product 2",
      description: "Discription 2",
      image: "sp-2.jpg",
      price: 12,
      quantity: 1 
    },
    {
      name: "Shopping Cart",
      item: 3
    }
  ]


  ReactDOM.render(
    <main>
      <CartHeader products={PRODUCTS} />
      <CartBody products={PRODUCTS} />
      <CartFooter products={PRODUCTS}/>
  </main>,
document.getElementById('text-ml')
  );

