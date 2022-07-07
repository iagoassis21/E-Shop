import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';
import Categories from './Categories';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.showCategories();
  }

  showCategories = async () => {
    const result = await getCategories();
    console.log(result);
    this.setState({
      categories: result,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <Categories categories={ categories } />
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
