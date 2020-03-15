import React from 'react';

// const DEFAULT_STATE = {
//   _id: '',
//   name: '',
//   price: '',
//   inStock: false
// };

// ************************************************************
// why did we use an arrow function for each inputs onChange??
// READ THE REACT DOCS!!!! https://reactjs.org/docs/handling-events.html
// without an arrow function, we would need to bind 'this' manually
// ************************************************************

class AddProduct extends React.Component {
  // the initial state ☝🏻☝🏻☝🏻
  state = { _id: '', name: '', price: '', inStock: false };

  // example with using DEFAULT_STATE: state = {...DEFAULT_STATE};

  // generic method that updates every field in the state from the form
  // 🏆 this method is reusable for any form!!!
  onChangeHandler = event => {
    // console.log(event.target.name, '===>', event.target.value);

    let { name, value, checked } = event.target;

    // CASE OF CHECKBOX:
    if (name === 'inStock') {
      value = checked;
    }

    // why below works: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names
    this.setState(
      { [name]: value },
      // check this out: if you are trying to use state as an argument for some method and
      // it just doesn't pick up all the values that you hoped it will (most likely the latest one will be missing)
      // try to call it in the callback of the setState() method and it work perfectly
      () => console.log(this.state)
    );

    // ⬆️⬆️⬆️ why is this happening? Due to the asynchronous behaviour, if a method is called outside of the callback,
    // it could "trigger" just a bit faster than the setState() method so in that case it won't have the latest state available
    // remember the example I showed you in the console with typing "hat" how we would see that in the input field there's "hat" (the full word)
    // but the state would show just "ha" - the last letter was missing since console.log() would trigger just a bit faster than setState()

    // this ih how it looked like:
    // this.setState({ [name]: value }); // <== first we setState()
    // console.log(this.state); // <== then we called method but anyway this method executed before  setState() was done executing
    // the solution: the code on line 26-31
  };

  // IF WE DON'T HAVE THIS ONE GENERIC METHOD, WE WOULD HAVE OT HAVE
  // ADDITIONAL METHODS TO HANDLE CHANGE IN EACH INPUT FIELD:
  // case of input with the name: _id
  // onChangeHandlerId = event => {
  //   this.setState({
  //     _id: event.target.value
  //   })
  // }

  // case of input with the name: name
  // onChangeHandlerName = event => {
  //   this.setState({
  //     name: event.target.value
  //   })
  // }

  // case of input with the name: price
  // onChangeHandlerPrice = event => {
  //   this.setState({
  //     price: event.target.value
  //   })
  // }

  handleFormSubmit = event => {
    // mandatory: the line below stops the default HTML submit button behavior from happening
    event.preventDefault();

    this.props.passedDownAddProd(this.state);

    // example with using DEFAULT_STATE (to save some keystrokes 🔑): this.setState({...DEFAULT_STATE});
    this.setState({
      _id: '',
      name: '',
      price: '',
      inStock: false
    });
  };

  render() {
    const { _id, name, price, inStock } = this.state;
    return (
      <>
        {/* handleFormSubmit => this is the way we called the method, can be any name */}
        <form onSubmit={event => this.handleFormSubmit(event)}>
          {/* <label>ID:</label>
          <input /> */}

          <label>
            ID:
            {/*                                                          onChangeHandler => this is the name we gave to the method, can be whichever */}
            <input name='_id' type='text' value={_id} onChange={event => this.onChangeHandler(event)} />
          </label>

          <label>
            Name:
            <input name='name' type='text' value={name} onChange={event => this.onChangeHandler(event)} />
          </label>

          <label>
            Price:
            <input name='price' type='number' value={price} onChange={event => this.onChangeHandler(event)} />
          </label>
          <label>
            In Stock::
            <input name='inStock' type='checkbox' value={inStock} onChange={event => this.onChangeHandler(event)} />
          </label>

          <br />
          <button>Save</button>
        </form>
      </>
    );
  }
}

export default AddProduct;
