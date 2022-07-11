import PropTypes from 'prop-types';
import React from 'react';

export default class Details extends React.Component {
  // construtor() {
  //   super();
  //   this.state = {

  //   };
  // }

  render() {
    const { match: { params: { id, title, thumbnail, price } } } = this.props;
    return (
      <div>
        <h2>
          {' '}
          {id}
          {' '}
        </h2>
        <h3>{title}</h3>
        <img src={ thumbnail } alt={ title } />
        <p>{price}</p>
        { console.log() }
      </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      listItems: PropTypes.arrayOf(PropTypes.object).isRequired,
    }),
  }).isRequired,
};
