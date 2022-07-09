import React, { Component } from 'react';
import Products from '../components/Products';

export default class Cart extends Component {
  render() {
    const { cartItems } = this.props;

    return (
      <div>
        {
          cartItems.map((item) => (
            // const itemId = Object.keys(item);
            // const { titulo } = item[itemId];
            // const { imagem } = item[itemId];
            // const { preço } = item[itemId];
            // const { quantidade } = item[itemId];
            // return (
            <article key={ item.id }>
              <h3 data-testid="shopping-cart-product-name">
                { item.title }
              </h3>
              <img src={ item.thumbnail } alt={ item.title } />
              <p>
                { item.price }
              </p>
              <p data-testid="shopping-cart-product-quantity">
                {' '}
                { item.quantidade }
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
