import React from 'react'
// import PropTypes from 'prop-types';
import ProductItem from '../product-item/product-item';

function ProductList({ items }) {
  return (
    <section className="main">
      <div className="wrapper">
        <ul className="product-list">
          {items.map(item => <ProductItem key={item.id} title={item.title} picture={item.picture} price={item.price.amount} />)}
        </ul>
      </div>
    </section>
  );
}

export default ProductList;
