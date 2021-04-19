import React from 'react';

import './product-row.style.css';

const ProductRow = () => {
    return (
        <div className="product-row-container">
            <table className="table">
        <tr>
            <td>name</td>
            <td>price</td>
        </tr>
        </table>
        </div>
    );
    
}

export default ProductRow;