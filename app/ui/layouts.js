const html = require('choo/html');
const Footer = require('./footer');

module.exports = function body(main) {
  return function(state, emit) {
    return html`
      <body class="bg-teal-500 w-screen h-screen">
        ${main(state, emit)} ${state.cache(Footer, 'footer').render()}
      </body>
    `;
  };
};
