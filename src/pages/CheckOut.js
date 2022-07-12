import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Form from '../components/Form';

export default class CheckOut extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        <div>
          <h2>Revise seus Produtos</h2>
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
        </div>
        <div>
          <Form />
        </div>
      </div>
    );
  }
}

CheckOut.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};
