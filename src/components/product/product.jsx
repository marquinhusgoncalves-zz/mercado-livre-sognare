import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types';

class Product extends PureComponent {
  constructor(props) {
    super(props);
    const { id } = this.props.match.params;
    this.state = {
      id
    };
  }

  componentDidMount() {
    this.fetchProduct().then((product) => {
      const { item } = product;
      if (item) {
        this.setState({
          item
        });
      }
    });
  }

  fetchProduct() {
    const fetchURL = `http://localhost:3001/api/items/${this.state.id}`;
    return fetch(fetchURL).then(data => data.json());
  }

  render() {
    return (
      <div className="product wrapper">
        { this.state.item &&
          <div className="product-wrapper-main">
            <section className="product-main">
              <figure className="product-figure">
                <img src={this.state.item.picture} alt={this.state.item.title} />
              </figure>
              <div className="product-info-area">
                <h1 className="product-title">{this.state.item.title}</h1>
                <p className="product-price">$ {this.state.item.price.amount}</p>
                <div className="product-details">
                </div>
                <div className="product-buy">
                  <button>Comprar</button>
                </div>
              </div>
            </section>

            <section className="product-description">
              <h2 className="title">Descrição do produto</h2>
              <p className="description">{this.state.item.description}</p>
            </section>
          </div>
        }
      </div>
    );
  }
}

export default Product;
