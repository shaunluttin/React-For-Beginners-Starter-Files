import React from 'react';

class StoreSelector extends React.Component {

    myInput = React.createRef();

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Submitted ${this.myInput}`);
    }

    render() {
        return (
            <form className='store-selector' onSubmit={this.handleSubmit}>
                <h2>Please enter a store:</h2>
                <input type='text' required placeholder="Input store:" ref={this.myInput}></input>
                <button type='submit'>Visit store</button>
            </form>
        );
    }
}

export default StoreSelector;