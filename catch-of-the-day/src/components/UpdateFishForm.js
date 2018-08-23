import React from "react";

class UpdateFish extends React.Component {

  handleChange = (e) => {
    const key = e.currentTarget.name;
    const value = e.currentTarget.value;

    const updated = {
      ...this.props.fish,
      [key]: value
    };

    this.props.updateFish(this.props.id, updated);
  }

  render() {
    const fish = this.props.fish;
    return (
      <div className="fish-edit">
        <input type="text" name="name" value={fish.name} onChange={this.handleChange} />
        <input type="text" name="price" value={fish.price} onChange={this.handleChange} />
        <select name="status" value={fish.status} onChange={this.handleChange} >
          <option>Fresh</option>
          <option>Unavailable</option>
        </select>
        <textarea name="desc" value={fish.desc} onChange={this.handleChange} />
        <input type="text" name="image" value={fish.image} onChange={this.handleChange} />
        <button onClick={() => this.props.removeFish(this.props.id)}>Remove Fish</button>
      </div>
    );
  }
}

export default UpdateFish;
