import React from 'react';

// const Product = props => {
const Product = ({ name, price, inStock, passedDownDeleteProduct }) => {
  return (
    <div>
      {/* <h3>{props.name}</h3> */}
      <h3>{name}</h3>

      {/* <p>${props.price}</p> */}
      <p>${price}</p>
      {/* "? "==> if true do this, " : " else do do something else */}
      {inStock ? <p>In stock</p> : <p> Out of stock</p>}

      {/* <button onClick={() => this.deleteProduct(oneProd)}> Delete </button> */}
      {/*              props.passedDownDeleteProduct() */}
      <button onClick={() => passedDownDeleteProduct({})}> Delete </button>
      {/* <button onClick={passedDownDeleteProduct}> Delete </button>
       */}
      <hr />
    </div>
  );
};

export default Product;
