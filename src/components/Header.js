import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    const { cartItemsQuantity } = this.props;
    return (
      <div>
        <div>
          Front-end Online Store
        </div>
        <div>
          <Link to="/cart" data-testid="shopping-cart-button">
            Carrinho
            <p data-testid="shopping-cart-size">
              { cartItemsQuantity }
            </p>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
