import React from 'react';

import './product-table.style.css';
import ProductCategoryRow from '../product-category-row/product-category-row.comp';
import ProductRow from '../product-row/product-row.comp';

const ProductTable = () => {
    return (
        <div className="product-table-container">

            <table className="table-product">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
            </table>
            <ProductCategoryRow/> 
            <ProductRow/>
        </div>

    );
    
}

export default ProductTable;