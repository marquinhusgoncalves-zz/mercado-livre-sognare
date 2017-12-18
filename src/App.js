import React, { Component } from 'react';
import logo from './ml.png';
// import spinner from './spinner.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <div className="wrapper">
            <h1 className="header-title">
              <a href="http://localhost:3000/">
                <img src={logo} className="header-logo" alt="Logo" />
              </a>
            </h1>
            <form className="search-bar">
              <input type="text" className="search-input" autofocus placeholder="O que você procura..."/>
              <button className="search-button">Buscar
                <i className="search-icon"></i>
              </button>
            </form>
          </div>
        </header>
        <section className="main">
          <div className="wrapper">
            <ul className="product-list">
              <li className="product">
                <figure className="product-figure">
                  <img src="" alt="Imagem Produto"/>
                </figure>
                <div className="product-info">
                  <h2 className="product-title">Nome do Produto</h2>
                  <p className="product-price">$ 1.980</p>
                </div>
              </li>
              <li className="product">
                <figure className="product-figure">
                  <img src="" alt="Imagem Produto" />
                </figure>
                <div className="product-info">
                  <h2 className="product-title">Nome do Produto</h2>
                  <p className="product-price">$ 1.980</p>
                </div>
              </li>
              <li className="product">
                <figure className="product-figure">
                  <img src="" alt="Imagem Produto" />
                </figure>
                <div className="product-info">
                  <h2 className="product-title">Nome do Produto</h2>
                  <p className="product-price">$ 1.980</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
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
      </div>
    );
  }
}

export default App;
