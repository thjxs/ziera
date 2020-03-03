const html = require('choo/html');
const Header = require('./header');
const Footer = require('./footer');

module.exports = function body(main) {
  return function(state, emit) {
    return html`
      <body>
        ${state.cache(Header, 'header').render()} ${main(state, emit)}
        ${state.cache(Footer, 'footer').render()}
      </body>
    `;
  };
};
