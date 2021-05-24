
import { LitElement, html } from 'lit-element';

// STYLES


// COMPONENTES
import '../../components/table-group/table-group.js';



export class CellsTableView extends  LitElement {

  static get is(){
    return 'cells-table-view'
  }

  static get properties() {
    return {

     
      viewData: {type: Array},
      
    };
  }

  constructor(){
      super();

      this.viewData = [
        {
          id:'kfc',
          fav: true,
          title:'KFC Nassica',
          available: 2500,
          amount: 270000,
          currency: 'EUR',          
        },
        {
          id:'nike',
          fav: false,
          title:'Nike CC El Reston',
          available: 64.95,
          amount: 64.95,
          currency: 'USD',
         
        },
        {
          id:'amazon',
          fav: true,
          title:'AmazonWeb',
          available: 0,
          amount: 3.45,
          currency: 'JPY',
         
        }
      ];

  }
    
  _componentDataDisplay(){
    return html `
      <table-group
        .infoTable="${this.viewData}"
      ></table-group>
      
    `
  }


  render(){
    return html `${this._componentDataDisplay()}`;
  }

}

customElements.define(CellsTableView.is, CellsTableView);