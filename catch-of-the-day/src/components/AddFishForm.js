import React from "react";

class AddFish extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descriptionRef = React.createRef();
  imageRef = React.createRef();

  createFish = event => {
    event.preventDefault();

    const fish = {
      name: this.nameRef,
      price: this.priceRef,
      status: this.statusRef,
      description: this.descriptionRef,
      image: this.imageRef
    };

    console.log('addFish')
    this.props.addFish(fish);
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input type="text" ref={this.nameRef} />
        <input type="text" ref={this.priceRef} />
        <select ref={this.statusRef}>
          <option>Fresh</option>
          <option>Unavailable</option>
        </select>
        <textarea ref={this.descriptionRef} />
        <input type="text" ref={this.imageRef} />
        <button>+ Add Fish</button>
      </form>
    );
  }
}

export default AddFish;
