const html = "<p class=\"one\">\n  One <span class=\"and\">and <span class=\"two\">Two</span></span>\n</p>\n\n<slot name=\"title\"></slot>\n\n<p>Ohayou!</p>\n\n<slot></slot>\n";

const css = "::slotted(h2) {\n  color: orange;\n}\n\n.one {\n  color: red\n}\n\n.one .and {\n    color: black\n  }\n\n:host([green]) .one .and {\n      color: green\n  }\n\n.one .two {\n    color: blue;\n  }\n\np {\n  color: pink\n}\n\n::slotted(p) {\n    color: purple\n}\n";

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
