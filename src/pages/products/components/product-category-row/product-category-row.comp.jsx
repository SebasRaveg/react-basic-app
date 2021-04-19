import React from 'react';

import './product-category-row.style.css';

const ProductCategoryRow = () => {
    return (
        <div className="product-category-row-container">
            <tr>
                <th colSpan="2">
                    Category
                </th>
            </tr>
        </div>
    );
    
}

export default ProductCategoryRow;