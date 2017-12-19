import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import ProductItem from '../product-item/product-item';
import ProductNotFound from '../product-not-found/product-not-found';

class ProductList extends PureComponent {
  constructor(props) {
    super(props);
    const { search } = queryString.parse(this.props.location.search);
    this.state = {
      search,
      items: null
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts() {
    const fetchURL = `http://localhost:3001/api/items?search=${
      this.state.search
    }`;
    return fetch(fetchURL)
      .then(data => data.json())
      .then(products => {
        const { items } = products;
        if (items && items.length) {
          this.setState({
            items
          });
        }
      });
  }

  render() {
    return (
      <section className="main">
        <div className="wrapper">
          <ul className="products-list">
            {this.state.items && this.state.items !== null ? (
              this.state.items.map(item => (
                <ProductItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  picture={item.picture}
                  price={item.price.amount}
                />
              ))
            ) : (
              <ProductNotFound />
            )}
          </ul>
        </div>
      </section>
    );
  }
}

ProductList.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired
  })
};

export default ProductList;
