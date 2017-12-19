import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ProductItem({ id, title, picture, price }) {
  return (
    <li className="product-item">
      <Link to={`/items/${id}`} className="product-link">
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

ProductItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default ProductItem;
