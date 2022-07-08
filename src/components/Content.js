import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.css';
import Cart from '../pages/Cart';
import Details from '../pages/Details';
import ProductList from '../pages/ProductList';

class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      productItem: '',
      listItems: '',
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
    console.log(result);
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
    console.log(results);
    this.setState({
      listItems: results,
    });
  }

  render() {
    const {
      categories,
      productItem,
      listItems } = this.state;

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
              />) }
          />
          <Route path="/cart" render={ () => (<Cart />) } />
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
