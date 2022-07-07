import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Products extends Component {
  render() {
    const { listItems } = this.props;
    return (
      <div>
        {
          listItems.map(({ title, price, id, thumbnail }) => (
            <article className="card" key={ id } data-testid="product">
              <h3>{ title }</h3>
              <img src={ thumbnail } alt={ title } />
              <p>{ price }</p>
            </article>
          ))
        }
      </div>
    );
  }
}

Products.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};
