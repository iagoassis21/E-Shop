import PropTypes from 'prop-types';
import React from 'react';

export default class Details extends React.Component {
  render() {
    const { listItems, match: { params: { id } } } = this.props;
    const element = listItems.find((item) => item.id === id);
    const { title, thumbnail, price } = element;
    return (
      <div>
        <h2>
          {' '}
          {id}
          {' '}
        </h2>
        <h3 data-testid="product-detail-name">{title}</h3>
        <img src={ thumbnail } alt={ title } />
        <p>{price}</p>
      </div>
    );
  }
}

Details.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
