import React, { useContext } from 'react';
import { Ringcontext } from '../Grandpa/Grandpa';

const Special = () => {
    const ring = useContext(Ringcontext)
    return (
        <div>
            <p>Special</p>
            <p><small>Gift: {ring} </small></p>
        </div>
    );
};

export default Special;