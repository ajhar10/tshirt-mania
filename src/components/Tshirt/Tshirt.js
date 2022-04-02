import React from 'react';
import './Tshirt.css'

const Tshirt = ({ tshirt, handleAddtoCart }) => {
    const { _id, name, price, picture, } = tshirt;
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h3>Name; {name}</h3>
            <p>Price: {price}</p>
            <button onClick={() => handleAddtoCart(tshirt)}>Add To Cart</button>
        </div>
    );
};

export default Tshirt;