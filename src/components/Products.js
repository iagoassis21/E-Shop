import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Products extends Component {
  render() {
    const { listItems, onAddToCart } = this.props;
    return (
      <div>
        {
          listItems.map(({
            title,
            price,
            id,
            thumbnail,
            shipping: { free_shipping: freeShipping },
          }) => (
            <div className="card" key={ id } data-testid="product">
              <Link data-testid="product-detail-link" to={ `/details/${id}` }>
                <article>
                  <h3>{title}</h3>
                  <img src={ thumbnail } alt={ title } />
                  <p>{price}</p>
                </article>
              </Link>
              <button
                type="button"
                onClick={ () => onAddToCart(id) }
                data-testid="product-add-to-cart"
              >
                Adicionar ao Carrinho
              </button>
              {
                freeShipping && <p data-testid="free-shipping">frete grátis</p>
              }
            </div>
          ))
        }
      </div>
    );
  }
}

Products.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};
