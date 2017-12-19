import React from 'react'
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ProductItem({ item, title, picture, price }) {
  return (
    <li className="product-item">
      <Link to={`/items/${item}`} className="product-link">
        <figure className="product-item-figure">
          <img src={picture} className="product-item-img" alt={title} />
        </figure>
        <div className="product-info">
          <h2 className="product-title">{title}</h2>
          <p className="product-price">$ {price}</p>
      </div>
      </Link>
    </li>
  );
}

export default ProductItem;
