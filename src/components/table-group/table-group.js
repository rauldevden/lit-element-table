
import { LitElement, html } from 'lit-element';

import bootstrap from './styles/TableGroup-bootstrap.js';
import font from './styles/font/TitilliumWeb-font.js';

import {dataTable} from './config/config-data';

// COMPONENTES
import '../row-group/row-group.js';

export class TableGroup extends LitElement {

  static get styles(){
    return [ bootstrap, font];
  }

  static get is(){
    return 'table-group';
  }

  static get properties() {
    return {
     
      infoTable: {type: Array},

    };
  }

  _getRow(id){
    return this.shadowRoot.getElementById(id);
  }

  constructor(){
      super();

      console.log(dataTable);

      this.infoTable = dataTable;

      document.addEventListener('row-group-fav-click', (e) =>{
        this._getRow(e.detail.id).changeFav(!e.detail.faved);
      })

  }

  get _displayTableInfo(){
    let totalAmount = 0;
    let totalAvailable = 0;
    let numRows = 0;
    this.infoTable.map((rowsInfo) => {
      totalAmount = totalAmount+rowsInfo.amount;
      totalAvailable = totalAvailable+rowsInfo.available;
      numRows = numRows+1;
    })
    
    return html `
       <div class="row pb-5">

        <div class="col-7">
        <h4>${numRows} cuentas</h4>
        </div>

        <div class="col-5 text-end">
        <h3>${totalAvailable} / ${totalAmount}</h3>
        </div>

       </div>
    `
  }

  get _displayTableHeader(){
    return html `
      <div class="row">

        <div class="col-8 m-0 row ">

          <div class="col-2">
            FAV.
          </div>

          <div class="col-10">
            ALIAS / NÚMERO DE CUENTA
          </div>

        </div>

        <div class="col-4 row m-0 text-end">
          
          <div class="col-5">
            SALDO DISPONIBLE
          </div>

          <div class="col-5">
            SALDO EN CUENTA
          </div>

          <div class="col-1">

          </div>

        </div>
      </div>
    `
  }

  get _displayRows(){
    return html`
    
    ${this.infoTable.map((row) => {
        return html `
          <row-group 
            id=${row.id}
            .infoRow="${row}">
          </row-group>
        `
      })}
    </div>
    `
     
  }

  render(){
      return html`
      <div class="container bg-light rounded p-5 d-flex justify-content-center align-items center">
        <div class="row">
          ${this._displayTableInfo}
          ${this._displayTableHeader}
          ${this._displayRows}
        </div>
      </div>
      `;
  }

}

customElements.define(TableGroup.is , TableGroup);

