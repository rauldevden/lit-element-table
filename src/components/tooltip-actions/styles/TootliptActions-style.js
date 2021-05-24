import { LitElement, html, css } from 'lit-element';

export default css`
.tooltip {
  position: absolute;
  display: none;
  z-index: 9;
  padding: 1em;
  background-color: var(--acent-primary-dark, #162E64);
  color: var(--light-color, #F5F5F5);
  -webkit-box-shadow: 1px 1px 3px 0 var(--light-color, #49585A);
          box-shadow: 1px 1px 3px 0 var(--light-color, #49585A);
  text-align: center;
  border-radius: .3em;
}

.tooltip .action {
  padding: .6em;
  margin: .4em 0;
  border-radius: .3em;
  cursor: pointer;
  -webkit-transition: background-color 200ms ease-in-out;
  transition: background-color 200ms ease-in-out;
}

.tooltip .action:hover {
  background-color: var(--light-color, #F5F5F5);
  color: var(--dark-color, #02010A);
  -webkit-transition: background-color 200ms ease-in-out;
  transition: background-color 200ms ease-in-out;
  -webkit-transition: color 200ms ease-in-out;
  transition: color 200ms ease-in-out;
}

.display {
  display: block;
  -webkit-animation: var(--tooltip-deploy-direction, deploy-bottom) var(--tooltip-deploy-time, 200ms) forwards ease-out;
          animation: var(--tooltip-deploy-direction, deploy-bottom) var(--tooltip-deploy-time, 200ms) forwards ease-out;
}


@-webkit-keyframes deploy-top {
  0% {
    -webkit-transform: translateX(20%) translateY(-100%);
            transform: translateX(20%) translateY(-100%);
  }
  100% {
    -webkit-transform: translateX(20%) translateY(-60%);
            transform: translateX(20%) translateY(-60%);
  }
}

@keyframes deploy-top {
  0% {
    -webkit-transform: translateX(20%) translateY(-100%);
            transform: translateX(20%) translateY(-100%);
  }
  100% {
    -webkit-transform: translateX(20%) translateY(-60%);
            transform: translateX(20%) translateY(-60%);
  }
}

@-webkit-keyframes deploy-bottom {
  0% {
    -webkit-transform: translateX(20%) translateY(20%);
            transform: translateX(20%) translateY(20%);
  }
  100% {
    -webkit-transform: translateX(20%) translateY(-60%);
            transform: translateX(20%) translateY(-60%);
  }
}

@keyframes deploy-bottom {
  0% {
    -webkit-transform: translateX(20%) translateY(20%);
            transform: translateX(20%) translateY(20%);
  }
  100% {
    -webkit-transform: translateX(20%) translateY(-60%);
            transform: translateX(20%) translateY(-60%);
  }
}

`;