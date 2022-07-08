import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Categories from '../components/Categories';
import Products from '../components/Products';
// import Details from './Details';

class ProductList extends React.Component {
 

  render() {
    const { categories, productItem, listItems } = this.state;
    return (
      <div>
        <Categories
          categories={ categories }
          onSearchCategory={ this.searchProductsByCategoryId }
        />
        <form className="formProductList" onSubmit={ this.handleSubmit }>
          <label
            htmlFor="searchId"
          >
            <input
              type="text"
              id="searchId"
              data-testid="query-input"
              value={ productItem }
              name="productItem"
              onChange={ this.handleInputChange }
            />
          </label>
          <button
            data-testid="query-button"
            type="submit"
            onClick={ this.searchProductByQuery }
          >
            Buscar
          </button>
        </form>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        {
          listItems.length
            ? <Products listItems={ listItems } />
            : 'Nenhum produto foi encontrado'
        }
        <nav>
          <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        </nav>
      </div>
    );
  }
}

export default ProductList;
