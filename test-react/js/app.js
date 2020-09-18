const PRODUCTS = [
  {
    id: 1,
    name: "Iphone 12",
    description: "Description 1",
    image: "https://via.placeholder.com/200x150",
    price: 1000,
    quantity: 20,
  },
  {
    id: 2,
    name: "Laptop DELL",
    description: "Description 2",
    image: "https://via.placeholder.com/200x150",
    price: 7,
    quantity: 1,
  },
];

function App() {
  const [products, setProducts] = React.useState(PRODUCTS);
  const [showModal, setShowModal] = React.useState(false);
  const [deleteProduct, setDeleteProduct] = React.useState({});
  
 

function confirmRemove(product) {
  //setShowModal(true);
  setDeleteProduct(product);

  // Set state kiểu tay to (bật tắt modal)
  // if (isShowModal == true) {
  //   setShowModal(false);
  // } else {
  //   setShowModal(true);
  // }

  // Set state kiểu hiện đại (bật tắt modal)
  setShowModal((value) => !value);
}
  
function removeProduct (id) {
  // let cf = confirm("Xoá " + name);
  //  let newProducts = [...products];
  //  //console.log(newProducts)
  // let deleteProductIndex = newProducts.findIndex(product => product.id == id);
  // newProducts.splice(deleteProductIndex, 1);
  // setProducts(newProducts);

  const newProducts = products.filter(
    (product) => product.id != deleteProduct.id
  );
  setProducts(newProducts);
  
  if (newProducts) {
     setShowModal(false);
  }


};

function handleChangeQuantity(productId,event){
  let eventValue=event.target.value;  
  if (parseInt(eventValue) < 100) {
    let newProduct=[...products];
    let findProduct=products.findIndex(product=>product.id==productId);
    newProduct[findProduct].quantity = parseInt(eventValue);
    setProducts(newProduct);
    }
  }

  function addNew() {
    let newDcm = [...products];
    newDcm.push({
      id: 3,
      name: "Laptop DELL 3",
      description: "Description 3",
      image: "https://via.placeholder.com/200x150",
      price: 1200,
      quantity: 10
    });
    setProducts(newDcm);
  }


  const taxPercent = 0.1; // Thuế = 10% subTotal
  let numberItems = 0;
  let subTotal = 0;

  // Tính tổng số sản phẩm và tổng tiền
  for (const product of products) {
    numberItems += product.quantity;
    subTotal += product.price * product.quantity;
  }
  let tax = (subTotal * taxPercent);
  let toTal = (subTotal + tax);

 

  return (
    <main>
      <CartHeader numberItems={numberItems} 
      title="Shopping Cart" 
      addNew={addNew} />

      <CartBody 
      products={products} 
      confirmRemove={confirmRemove}
      handleChangeQuantity={handleChangeQuantity}

      />

      <CartFooter numberItems={numberItems} 
      subTotal={subTotal.toFixed(1)} 
      tax={tax.toFixed(1)} 
      toTal={toTal.toFixed(1)} />

      <ModalShow 
      isShow={showModal}  
      handleOk={removeProduct}
      handleCancel={() => setShowModal(false)}
      getNameProduct={deleteProduct.name} />
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
