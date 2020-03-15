import React from 'react';

import Product from '../Product/Product';

import AddProduct from '../AddProduct/AddProduct';

class ProductsList extends React.Component {
  // ✅ state is always object
  state = {
    showInStock: false,
    products: [
      {
        _id: '34rg',
        name: 'iPhone X',
        price: 799.99,
        inStock: true
      },
      {
        _id: '36gu',
        name: 'iron',
        price: 29.99,
        inStock: false
      },
      {
        _id: '97ux',
        name: 'coffee mug',
        price: 9.0,
        inStock: true
      }
    ]
  };

  addNewProduct = anyNewProd => {
    // we get "anyNewProd" from the child component (<AddProduct />)

    // 🚨🚨🚨🚨 big no no 🚨🚨🚨🚨🚨 => don't mutate the state
    // this.state.products.push(anyNewProd);

    // 1st step: make a copy of the array
    const prodCopy = [...this.state.products];

    // 2nd: modify the copy of the array
    prodCopy.push(anyNewProd);

    // 3rd step: set the state of the original array to the new array
    this.setState({
      products: prodCopy
    });
  };

  deleteProduct = prodToBeDeleted => {
    // console.log(prodToBeDeleted);

    // filter product array and give me back all the products that have id different than the one this method just got
    // if iphone give me back all other except iphone

    this.setState(prevState => ({
      products: prevState.products.filter(el => el._id !== prodToBeDeleted._id)
    }));
  };

  //   deleteProduct = someIndex => {
  //     // products.splice(someIndex, 1)

  //     const { products } = this.state;
  //     const prodCopy = [...products];
  //     prodCopy.splice(someIndex, 1);

  //     this.setState({
  //       products: prodCopy
  //     });
  //   };

  checkStock = () => {
    // check the state of "showInStock" and on each click on the button change it to the opposite of what it was
    // true --> false
    // false --> true
    this.setState({
      showInStock: !this.state.showInStock
    });
  };

  render() {
    const { products, showInStock } = this.state;

    return (
      <>
        <section>
          <AddProduct passedDownAddProd={prodObject => this.addNewProduct(prodObject)} />
        </section>
        <button onClick={() => this.checkStock()}> {showInStock ? 'All products' : 'In Stock'} </button>
        <ul className='some-class'>
          {products.map((oneProd, index) => {
            return (
              (!showInStock || oneProd.inStock) && (
                <li key={oneProd._id}>
                  {/* _id is always unique so we don't have to use index if we don't want to*/}
                  <Product {...oneProd} passedDownDeleteProduct={() => this.deleteProduct(oneProd)} />
                </li>
              )
            );
          })}
        </ul>
      </>
    );
  }
}

export default ProductsList;
