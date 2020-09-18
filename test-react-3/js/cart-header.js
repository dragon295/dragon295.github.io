function CartHeader({numberItems, addNew , title}) {
  return (
    <header className="container">
      <h1>{title}</h1>

      <ul className="breadcrumb">
        <li>Home</li>
        <li>{title}</li>
      </ul>
      
      <button onClick={addNew}>them moi</button>
      <span className="count">{numberItems} items in the bag</span>
    </header>
  );
}
