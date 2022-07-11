import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Avaliation extends Component {
  render() {
    const { email,
      message,
      //   rate,
      onSubmit,
      onInputChange,
      onSaveAvaliation,
      avaliations } = this.props;

    return (
      <div>
        <form onSubmit={ onSubmit }>
          <h2>Avaliações</h2>
          <input
            data-testid="product-detail-email"
            type="email"
            name="email"
            value={ email }
            placeholder="digite seu e-mail aqui"
            onChange={ onInputChange }
          />
          <label htmlFor="one">
            <input
              data-testid="1-rating"
              type="radio"
              id="one"
              name="avaliationRadioButton"
              value="1"
              onChange={ onInputChange }
            />
            1
          </label>
          <label htmlFor="two">
            <input
              data-testid="2-rating"
              type="radio"
              id="two"
              name="avaliationRadioButton"
              value="2"
              onChange={ onInputChange }
            />
            2
          </label>
          <label htmlFor="three">
            <input
              data-testid="3-rating"
              type="radio"
              id="three"
              name="avaliationRadioButton"
              value="3"
              onChange={ onInputChange }
            />
            3
          </label>
          <label htmlFor="four">
            <input
              data-testid="4-rating"
              type="radio"
              id="four"
              name="avaliationRadioButton"
              value="4"
              onChange={ onInputChange }
            />
            4
          </label>
          <label htmlFor="five">
            <input
              data-testid="5-rating"
              type="radio"
              id="five"
              name="avaliationRadioButton"
              value="5"
              onChange={ onInputChange }
            />
            5
          </label>
          <textarea
            data-testid="product-detail-evaluation"
            type="text"
            name="message"
            value={ message }
            placeholder="Escreva aqui sua avaliação sobre o produto"
            onChange={ onInputChange }
          />
          <button
            data-testid="submit-review-btn"
            type="submit"
            onClick={ onSaveAvaliation }
          >
            Enviar
          </button>
        </form>
        <div>
          { avaliations.map((element, index) => (
            <div key={ index }>
              <p>{ element.email }</p>
              <p>{ element.rate }</p>
              <p>{ element.message }</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Avaliation.propTypes = {
  email: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  //   rate: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveAvaliation: PropTypes.func.isRequired,
  avaliations: PropTypes.arrayOf(PropTypes.object).isRequired,
};
