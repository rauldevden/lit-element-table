
import { LitElement, html } from 'lit-element';

// DATA
import {dataView} from './config/cells-table-view-data';

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

      this.viewData = dataView;

  }
    
  get _componentDataDisplay(){
    return html `
      <table-group
        .infoTable="${this.viewData}"
      ></table-group>
      
    `
  }


  render(){
    return html `${this._componentDataDisplay}`;
  }

}

customElements.define(CellsTableView.is, CellsTableView);