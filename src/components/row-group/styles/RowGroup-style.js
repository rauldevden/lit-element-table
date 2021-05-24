import { LitElement, html, css } from 'lit-element';

export default css`

.row-group-style {
  color: var(--dark-color, #02010A);
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  margin: 0;
  -webkit-box-shadow: inset 0 -1px 0 0 var(--light-color, #bcccce);
          box-shadow: inset 0 -1px 0 0 var(--light-color, #bcccce);
  -webkit-transition: -webkit-box-shadow 200ms ease-in-out;
  transition: -webkit-box-shadow 200ms ease-in-out;
  transition: box-shadow 200ms ease-in-out;
  transition: box-shadow 200ms ease-in-out, -webkit-box-shadow 200ms ease-in-out;
}

.row-group-style:hover {
  -webkit-box-shadow: inset 0 -3px 0 0 var(--light-color, #bcccce);
          box-shadow: inset 0 -3px 0 0 var(--light-color, #bcccce);
  -webkit-transition: -webkit-box-shadow 200ms ease-in-out;
  transition: -webkit-box-shadow 200ms ease-in-out;
  transition: box-shadow 200ms ease-in-out;
  transition: box-shadow 200ms ease-in-out, -webkit-box-shadow 200ms ease-in-out;
}

.row-group-style .row-title {
  color: var(--accent-primary, #00a3ee);
  font-size: 1.3em;
}

.row-group-style tooltip-actions {
  z-index: 99;
  -webkit-transform: translateX(-30%);
          transform: translateX(-30%);
}
`