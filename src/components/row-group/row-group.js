
import { LitElement, html } from 'lit-element';

import bootstrap from './styles/RowGroup-bootstrap.js';

import customCss from './styles/RowGroup-style.js';
import font from './styles/font/TitilliumWeb-font.js';

// COMPONENTES
import '../currency-format/currency-format';
import '../fontawesome-icon/fontawesome-icon';
import '../tooltip-actions/tooltip-actions';

export class RowGroup extends LitElement {

  static get styles(){
    return [ bootstrap, customCss, font];
  }

  static get is(){
    return 'row-group';
  }

  static get properties() {
    return {
      
      infoRow: {type: Object, attribute: 'info-row'},

      tooltipActions: {type: Array},

      hola: {type: String},

    };
  }

  constructor(){
      super();

      this.tooltipActions = 
      [
        {
          'actionId': 'open',
          'actionText':'Ver cuenta',
        },
        {
          'actionId': 'edit',
          'actionText':'Editar datos',
        },
        {
          'actionId': 'transaction',
          'actionText':'Realizar tranascción',
        },
        {
          'actionId': 'delete',
          'actionText':'Eliminar cuenta'
        },
      ];

      document.addEventListener('tooltip-actions-action-click', (e) =>{
        e.stopImmediatePropagation();
        console.log(e.detail.action + e.detail.id);
        
      })

  }

  get _getTooltip(){
    return this.shadowRoot.getElementById('tooltip');
  }

  _deployTooltip(){
    this._getTooltip.showTooltip();
  }

  _cleanTooltip(){
    this._getTooltip.hideTooltip();
  }

 

  _clickFav(){

      /**
       * Evento que se lanza al pulsar cualquier tecla
       * @event fav-click
       */
      this.dispatchEvent(new CustomEvent(RowGroup.is+'-fav-click', {
        bubbles: true,
        composed: true,
        detail: {id: this.infoRow.id , faved: this.infoRow.fav}
      }));

  }

  changeFav(fav){
    this.infoRow.fav = fav;

    this.requestUpdate();
  }

  _displayInfoRow(){

    return html `
     <div id="${this.infoRow.id}" class="col-12 my-2 p-3 row row-group-style">

      <div class="col-8 row m-0 d-flex align-items-center">
         
        <div class="col-2">
          <fontawesome-icon
            @click="${this._clickFav}"
            ?selected="${this.infoRow.fav}"
            icon="star"
          ></fontawesome-icon>
        </div>
          
        <!-- TITLE -->
        <div class="col-10 row-title ">
          ${this.infoRow.title}
        </div>

      </div>

      <div class="col-4 row m-0 text-end d-flex align-items-center">
        <!-- AVAILABLE -->
        <div class="col-5">
          <currency-format
            .amount="${this.infoRow.available}"
            .currency="${this.infoRow.currency}">
          </currency-format>
          <small>Hace 6 minutos</small>
        </div>

        <!-- AMOUNT -->
        <div class="col-5">
          <currency-format
            .amount="${this.infoRow.amount}"
            .currency="${this.infoRow.currency}">
          </currency-format>
          <small>Hace 6 minutos</small>
        </div>

        <div class="col-2 tooltip-div"
          @mouseleave="${this._cleanTooltip}">
          <fontawesome-icon
            @click="${this._deployTooltip}"
            icon="more">
          </fontawesome-icon>

          <tooltip-actions 
            id-tooltip="${this.infoRow.id}"
            .actions=${this.tooltipActions}
            id="tooltip"
          ></tooltip-actions>
        </div>

      </div>

    </div>
    `
  }




  render(){
    return html`
    <style>
      :host{
        --tooltip-deploy-time: 300ms;
      }
    </style>
      ${this._displayInfoRow()}

    `;
  }

}

customElements.define(RowGroup.is , RowGroup);

