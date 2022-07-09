import PropTypes from 'prop-types';
import React from 'react';

export default class Categories extends React.Component {
  render() {
    const { categories, onSearchCategory } = this.props;
    return (
      <section>
        <h2>Categories</h2>
        <article>
          <ul>
            {
              categories.map(({ name, id }) => (
                <li key={ id }>
                  <button
                    data-testid="category"
                    type="button"
                    onClick={ () => onSearchCategory(id) }
                  >
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
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSearchCategory: PropTypes.func.isRequired,
};
// Categories.propTypes = {
//   categories: PropTypes.arrayOf(PropTypes.string).isRequired,
//   onSearchCategory: PropTypes.func.isRequired,
// };
