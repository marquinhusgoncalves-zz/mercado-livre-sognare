import React from 'react'
// import PropTypes from 'prop-types';

function ProductItem({ title, picture, price }) {
  return (
    <li className="product-item">
      <figure className="product-item-figure">
        <img src={picture} className="product-item-img" alt={title} />
      </figure>
      <div className="product-info">
        <h2 className="product-title">{title}</h2>
        <p className="product-price">$ {price}</p>
      </div>
    </li>
  );
}

export default ProductItem;
