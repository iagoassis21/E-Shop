import React from 'react';
import PropTypes from 'prop-types';
import Categories from '../components/Categories';
import Products from '../components/Products';

class ProductList extends React.Component {
  render() {
    const {
      categories,
      productItem,
      listItems,
      onProductByQuery,
      onProductByCategoryId,
      onAddToCart,
      onInputChange,
      onSubmit } = this.props;
    return (
      <div>
        <Categories
          categories={ categories }
          onSearchCategory={ onProductByCategoryId }
        />
        <form className="formProductList" onSubmit={ onSubmit }>
          <label
            htmlFor="searchId"
          >
            <input
              type="text"
              id="searchId"
              data-testid="query-input"
              value={ productItem }
              name="productItem"
              onChange={ onInputChange }
            />
          </label>
          <button
            data-testid="query-button"
            type="submit"
            onClick={ onProductByQuery }
          >
            Buscar
          </button>
        </form>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        {
          listItems.length
            ? (
              <Products
                listItems={ listItems }
                onAddToCart={ onAddToCart }
              />
            )
            : 'Nenhum produto foi encontrado'
        }
      </div>
    );
  }
}

ProductList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  productItem: PropTypes.string.isRequired,
  listItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onProductByQuery: PropTypes.func.isRequired,
  onProductByCategoryId: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ProductList;
