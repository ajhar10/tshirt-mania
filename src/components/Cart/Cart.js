import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleToRemove }) => {
    //Conditional Rendaring Option
    //1.Element Variable
    //2/ternary operator  condition?true:false
    //3.And shorthand
    let command;
    if (cart.length === 0) {
        command = <p>Add at least one item</p>
    }
    else if (cart.length === 1) {
        command = <p>Added more item</p>
    } else {
        command = <p><small>Thanks for added item</small></p>
    }

    return (
        <div>
            <h2>Cart Item</h2>
            {command}

            {
                cart.map(tshirt => <p>{tshirt.name}<button onClick={() => handleToRemove(tshirt)}>X</button></p>
                )
            }
            {
                cart.length !== 4 ? 'Adding...' : <button>Remove All</button>
            }
            {
                cart.length === 3 && <div className='orange'>Trigonal Item</div>
            }
        </div>
    );
};

export default Cart;