import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Categories extends Component {
  render() {
    const { categories } = this.props;
    return (
      <section>
        <h2>Categories</h2>
        <article>
          <ul>
            {
              categories.map(({ name, id }) => (
                <li key={ id }>
                  <button data-testid="category" type="button">
                    { name }
                  </button>
                </li>
              ))
            }
          </ul>
        </article>
      </section>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};
