import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.css';
import Cart from '../pages/Cart';
import Details from '../pages/Details';
import ProductList from '../pages/ProductList';

class Content extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ ProductList } />
        <Route path="/cart" component={ Cart } />
        <Route path="/details/:id" component={ Details } />
      </Switch>
    );
  }
}

export default Content;
