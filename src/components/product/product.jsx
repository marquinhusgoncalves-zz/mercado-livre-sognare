import React from 'react'
// import PropTypes from 'prop-types';

function Product() {
  return (
    <div className="product wrapper">
      <div className="product-wrapper-main">
        <section className="product-main">
          <figure className="product-figure">
            <img src="" alt="" />
          </figure>
          <div className="product-info-area">
            <h1 className="product-title" title="">Nome do Produto</h1>
            <p className="product-price">R$1980,00</p>
            <div className="product-details">
            </div>
            <div className="product-buy">
              <button>Comprar</button>
            </div>
          </div>
        </section>
        <section className="product-description">
          <h2 className="title">Descrição do produto</h2>
          <p className="description"></p>
        </section>
      </div>
    </div>
  );
}

export default Product;
