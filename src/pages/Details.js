import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default class Details extends React.Component {
  render() {
    const {
      cartItemsQuantity,
      onAddToCart,
      listItems,
      match: { params: { id } } } = this.props;
    const element = listItems.find((item) => item.id === id) || [];
    const { title, thumbnail, price } = element;
    return (
      <div>
        <h3 data-testid="product-detail-name">{title}</h3>
        <img src={ thumbnail } alt={ title } />
        <p>{price}</p>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => onAddToCart(id) }
        >
          Adicionar ao Carrinho
        </button>
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        <span data-testid="shopping-cart-size">
          { cartItemsQuantity }
        </span>
      </div>
    );
  }
}

Details.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  cartItemsQuantity: PropTypes.number.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
