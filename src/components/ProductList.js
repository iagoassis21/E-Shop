import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductList extends Component {
  render() {
    return (
      <div>
        <form className="formProductList">
          <label
            htmlFor="searchId"
          >
            <input
              type="text"
              id="searchId"
            />
          </label>
        </form>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <nav>
          <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        </nav>
      </div>
    );
  }
}

export default ProductList;
