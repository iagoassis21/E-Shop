import React, { Component } from 'react';

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
      </div>
    );
  }
}

export default ProductList;
