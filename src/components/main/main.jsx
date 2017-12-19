import React from 'react';
// import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import ProductList from '../product-list/product-list'
import Product from '../product/product'

function Main() {
  return (
    <Switch>
      <Route exact path="/items" component={ProductList} />
      <Route exact path="/items/:id" component={Product} />
    </Switch>
  );
}

export default Main;
