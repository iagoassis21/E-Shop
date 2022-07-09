import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cart extends Component {
  render() {
    const { cartItems } = this.props;

    return (
      <div>
        {
          cartItems.map((item) => (
            <article key={ item.id }>
              <h3 data-testid="shopping-cart-product-name">
                { item.title }
              </h3>
              <img src={ item.thumbnail } alt={ item.title } />
              <p>
                { item.price * item.quantity }
              </p>
              <p data-testid="shopping-cart-product-quantity">
                {' '}
                { item.quantity }
                {' '}
              </p>
            </article>
          ))
        }
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Cart;
