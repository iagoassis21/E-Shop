import React from 'react';

export default class Details extends React.Component {
  render() {
    const { match: { params: { id } } } = this.props;
    return (
      <div>
        { console.log(id) }
      </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
