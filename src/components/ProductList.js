import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Categories from './Categories';
import Products from './Products';

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      productItem: '',
      listItems: '',
    };
  }

  componentDidMount() {
    this.showCategories();
  }

  handleSubmit(ev) {
    ev.preventDefault();
  }

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  showCategories = async () => {
    const result = await getCategories();
    console.log(result);
    this.setState({
      categories: result,
    });
  }

  searchProductByQuery = async () => {
    const { productItem } = this.state;
    const { results } = await getProductsFromCategoryAndQuery(null, productItem);
    this.setState({
      listItems: results,
    });
  }

  searchProductsByCategoryId = async (id) => {
    const { results } = await getProductsFromCategoryAndQuery(id, null);
    console.log(results);
    this.setState({
      listItems: results,
    });
  }

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
