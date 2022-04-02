import React from 'react';
import Special from '../Special/Special';

const Myself = ({ house }) => {
    return (
        <div>
            <h2>My Self</h2>
            <p>House: {house}</p>
            <Special></Special>
        </div>
    );
};

export default Myself;