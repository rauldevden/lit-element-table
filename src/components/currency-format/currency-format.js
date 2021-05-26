
import { LitElement, html } from 'lit-element';

import custom_css from './styles/CurrencyFormat-style.js';
import font from './styles/font/TitilliumWeb-font.js';



export class CurrencyFormat extends LitElement {

  static get styles(){
    return [custom_css, font];
  }

  static get is(){
    return 'currency-format';
  }

  static get properties() {
    return {

      amount: {type: Number},

      currency: {type: String},

    };
  }

  constructor(){
      super();
      this.amount = 0;
      this.currency = "EUR";
  }

  
  get _displayTotal(){
    let currencies = [];
    currencies['USD'] = {'currency': "$" , 'format': 'en-IN'} ;
    currencies['EUR'] = {'currency': "€" , 'format': 'de-DE'} ;
    currencies['JPY'] = {'currency': "¥" , 'format': 'ja-JP'} ;
    currencies['GBP'] = {'currency': "£" , 'format': 'en-IN'} ;
    return html `
      <div> 
        ${this.amount.toLocaleString(currencies[this.currency].format)}
        <small>${currencies[this.currency].currency}</small>
      </div>
    `
  }

  render(){
      return html`
        ${this._displayTotal}
      `;
  }

}

customElements.define(CurrencyFormat.is , CurrencyFormat);