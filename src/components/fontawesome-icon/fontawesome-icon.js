
import { LitElement, html } from 'lit-element';

import iconsClass from './styles/CustomIcons-style.js'


export class FontawesomeIcon extends LitElement {

  static get styles(){
    return [iconsClass ];
  }

  static get is(){
    return 'fontawesome-icon';
  }

  static get properties() {
    return {

      icon: {type: String},

      selected: {type: Boolean},

    };
  }

  constructor(){
      super();
      this.selected = false;
  }


  update(){
    super.update();
  }
  
  _getIcon(){
    return html `
      <div class="icon ${this.icon} ${this.selected ? `selected` : ``}"  srcset="">
    `
  }

  render(){
      return html`
      
        ${this._getIcon()}
      `;
  }

}

customElements.define(FontawesomeIcon.is , FontawesomeIcon);