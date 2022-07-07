import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import ProductList from './components/ProductList';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ ProductList } />
          <Route path="/cart" component={ Cart } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
