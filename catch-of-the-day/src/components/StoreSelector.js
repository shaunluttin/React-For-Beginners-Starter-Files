import React from 'react';

class StoreSelector extends React.Component {
    render() {
        return (
            <form className='store-selector'>
                <h2>Please enter a store:</h2>
                <input type='text' required placeholder="Input store:"></input>
                <button type='submit'>Visit store</button>
            </form>
        );
    }
}

export default StoreSelector;