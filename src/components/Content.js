import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.css';
import Cart from '../pages/Cart';
import Details from '../pages/Details';
import ProductList from '../pages/ProductList';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      productItem: '',
      listItems: [],
      cartItems: [],
      rate: '',
      email: '',
      message: '',
      avaliations: [],
    };
  }

  componentDidMount() {
    this.showCategories();
  }

  handleSubmit(ev) {
    ev.preventDefault();
  }

  handleInputChange = ({ target }) => {
    const { name, type, value } = target;
    // const value = type === 'radio' ? checked : value;
    if (type === 'radio') {
      this.setState({
        rate: value,
      });
    }
    this.setState({
      [name]: value,
    });
  }

  handleSaveAvaliation = () => {
    const { avaliations, email, message, rate } = this.state;
    const avaliationOfObject = {
      email,
      message,
      rate,
    };
    avaliations.push(avaliationOfObject);
    this.setState({ avaliations });
  }

  showCategories = async () => {
    const result = await getCategories();
    this.setState({
      categories: result,
    });
  }

  searchProductByQuery = async () => {
    const { productItem } = this.state;
    const { results } = await getProductsFromCategoryAndQuery(null, productItem);
    console.log(results);
    this.setState({
      listItems: results,
    });
  }

  searchProductsByCategoryId = async (id) => {
    const { results } = await getProductsFromCategoryAndQuery(id, null);
    this.setState({
      listItems: results,
    });
  }

  handleAddToCart = (id) => {
    const { listItems, cartItems } = this.state;
    const product = listItems.find((item) => item.id === id);
    const check = cartItems.find((item) => item.id === product.id);
    if (check) {
      this.setState({
        cartItems: this.increaseProductQuantity(id, cartItems),
      });
    } else {
      const productObject = {
        ...product,
        quantity: 1,
      };
      this.setState((prevState) => ({
        cartItems: [...prevState.cartItems, productObject],
      }));
    }
  }

  handleCartItemsQuantity = () => {
    const { cartItems } = this.state;
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }

  addItemQuantityInCart = (action, itemId, cartList) => {
    if (action === 'add') {
      this.setState({
        cartItems: this.increaseProductQuantity(itemId, cartList),
      });
    } else if (action === 'rem') {
      this.setState({
        cartItems: this.decreaseProductQuantity(itemId, cartList),
      });
    }
  }

  decreaseProductQuantity(itemId, cartList) {
    return cartList.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        item.quantity -= 1;
      }
      return item;
    });
  }

  increaseProductQuantity(itemId, cartList) {
    return cartList.map((item) => {
      if (item.id === itemId && (item.quantity < Number(item.available_quantity))) {
        item.quantity += 1;
      }
      return item;
    });
  }

  render() {
    const {
      categories,
      productItem,
      listItems,
      cartItems,
      rate,
      email,
      message,
      avaliations } = this.state;

    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (
              <ProductList
                categories={ categories }
                productItem={ productItem }
                listItems={ listItems }
                onSubmit={ this.handleSubmit }
                onProductByQuery={ this.searchProductByQuery }
                onProductByCategoryId={ this.searchProductsByCategoryId }
                onInputChange={ this.handleInputChange }
                onAddToCart={ this.handleAddToCart }
                cartItemsQuantity={ this.handleCartItemsQuantity() }
              />) }
          />
          <Route
            path="/cart"
            render={ () => (
              <Cart
                cartItems={ cartItems }
                onChangeQuantity={ this.addItemQuantityInCart }
              />) }
          />
          <Route
            path="/details/:id"
            render={ (routeProps) => (
              <Details
                { ...routeProps }
                listItems={ listItems }
                onAddToCart={ this.handleAddToCart }
                cartItemsQuantity={ this.handleCartItemsQuantity() }
                rate={ rate }
                email={ email }
                message={ message }
                onInputChange={ this.handleInputChange }
                onSubmit={ this.handleSubmit }
                onSaveAvaliation={ this.handleSaveAvaliation }
                avaliations={ avaliations }
              />) }
          />
        </Switch>
      </div>
    );
  }
}

export default Content;
