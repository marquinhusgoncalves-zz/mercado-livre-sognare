import React, { Component } from 'react';
import Header from './components/header/header'
import ProductList from './components/product-list/product-list'
import logo from './ml.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
    this.getValue = this.getValue.bind(this);
    this.searchProducts = this.searchProducts.bind(this);
  }

  getValue (search) {
    this.setState({search}, this.searchProducts);
  }

  searchProducts() {
    this.fetchProducts().then((products) => {
      const { items } = products;
      if (items && items.length) {
        this.setState({
          items
        });
      }
    });
  }

  fetchProducts() {
    const fetchURL = `http://localhost:3001/api/items?search=${this.state.search}`;
    return fetch(fetchURL).then(data => data.json());
  }

  render() {
    return (
      <div className="app">
        <Header getValue={this.getValue} />
        {
          this.state.items &&
          <ProductList items={this.state.items} />
        }
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
