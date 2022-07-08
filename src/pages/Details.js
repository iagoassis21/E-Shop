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
