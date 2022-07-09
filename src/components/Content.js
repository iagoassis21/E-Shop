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
    };
  }

  componentDidMount() {
    this.showCategories();
  }

  handleSubmit(ev) {
    ev.preventDefault();
  }

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
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
    let productObject = {
      // [product.id]: {
      //   id: product.id,
      //   titulo: product.title,
      //   preço: product.price,
      //   imagem: product.thumbnail,
      //   quantidade: 1,
      ...product,
      quantidade: 1,
    };

    if (check) {
      productObject = {
        // [product.id]: {
        //   id: product.id,
        //   titulo: product.title,
        //   preço: product.price,
        //   imagem: product.thumbnail,
        // quantidade: check.quantidade + 1,
        ...product,
        quantidade: check.quantidade + 1,
      };
    }
    this.setState((prevState) => ({
      cartItems: [productObject, ...prevState.cartItems],
    }));
  }

  render() {
    const {
      categories,
      productItem,
      listItems,
      cartItems } = this.state;

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
              />) }
          />
          <Route
            path="/cart"
            render={ () => (
              <Cart
                cartItems={ cartItems }
              />) }
          />
          <Route
            path="/details/:id"
            render={ (routeProps) => (
              <Details
                { ...routeProps }
                listItems={ listItems }
              />) }
          />
        </Switch>
      </div>
    );
  }
}

export default Content;
