import html from './index.html';
import css from './index.css';

const template = document.createElement('template');
template.innerHTML = `
  <style>${css}</style>

  ${html}
`;

class MyApp extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('my-app', MyApp);
