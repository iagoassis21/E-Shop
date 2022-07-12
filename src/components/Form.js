import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      userEmail: '',
      userCPF: '',
      userTelefone: '',
      userCep: '',
      userAdress: '',
    };
  }

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const {
      userName,
      userEmail,
      userCPF,
      userTelefone,
      userCep,
      userAdress,
    } = this.state;
    return (
      <form>
        <h2>Informações do Comprador</h2>
        <label htmlFor="user-Name">
          Nome
          <input
            data-testid="checkout-fullname"
            type="text"
            name="userName"
            value={ userName }
            id="user-Name"
            onChange={ this.handleInputChange }
          />
        </label>
        <label htmlFor="user-Email">
          E-mail
          <input
            data-testid="checkout-email"
            type="email"
            name="userEmail"
            value={ userEmail }
            id="user-Email"
            onChange={ this.handleInputChange }
          />
        </label>
        <label htmlFor="user-CPF">
          CPF
          <input
            data-testid="checkout-cpf"
            type="text"
            name="userCPF"
            value={ userCPF }
            id="user-CPF"
            onChange={ this.handleInputChange }
          />
        </label>
        <label htmlFor="user-Telefone">
          Telefone
          <input
            data-testid="checkout-phone"
            type="tel"
            name="userTelefone"
            value={ userTelefone }
            id="user-Telefone"
            onChange={ this.handleInputChange }
          />
        </label>
        <label htmlFor="user-Cep">
          CEP
          <input
            data-testid="checkout-cep"
            type="text"
            name="userCep"
            value={ userCep }
            id="user-Cep"
            onChange={ this.handleInputChange }
          />
        </label>
        <label htmlFor="user-Adress">
          Endereço
          <input
            data-testid="checkout-address"
            type="text"
            name="userAdress"
            value={ userAdress }
            id="user-Adress"
            onChange={ this.handleInputChange }
          />
        </label>
      </form>
    );
  }
}
