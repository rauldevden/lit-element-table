
import { LitElement, html } from 'lit-element';

import custom_css from './styles/TootliptActions-style.js';
import font from './styles/font/TitilliumWeb-font.js';



export class TooltipActions extends LitElement {

  static get styles(){
    return [ custom_css, font];
  }

  static get is(){
    return 'tooltip-actions';
  }

  static get properties() {
    return {
      
      actions: {type: Array},

      idTooltip: {type: String, attribute: 'id-tooltip'}

    };
  }

  constructor(){
      super();
      
      this.actions = [
        {
          'actionId': 'acttion1',
          'actionText':'Action 1',
        },
        {
          'actionId': 'action2',
          'actionText':'Action 2',
        }
      ]
  }

  get _getTooltipAction(){
    return this.shadowRoot.getElementById(this.idTooltip);
    
  }

  _actionClick(e){
    let actionClicked = e.path[0].id;
      /**
       * Evento que se lanza al pulsar cualquier tecla
       * @event action-click
       */
     this._getTooltipAction.dispatchEvent(new CustomEvent(TooltipActions.is+'-action-click', {
      bubbles: true,
      composed: true,
      detail: {id: this.idTooltip, action: actionClicked} 
    }));
  }

  showTooltip(){
    this._getTooltipAction.classList.add("display");
  }

  hideTooltip(){
    this._getTooltipAction.classList.remove("display")
  }

  _tooltip(){
    return html `
    <div 
    class="tooltip"
    id="${this.idTooltip}">
      ${this.actions.map((action) => {
        return html `
          <div 
            id="${action.actionId}" 
            class="action"
            @click="${this._actionClick}"
          >${action.actionText}</div>
        `
      })}
    </div>
    `
  }

  render(){
      return html`
        ${this._tooltip()}
      `;
  }

}

customElements.define(TooltipActions.is , TooltipActions);