const html = require('choo/html');

module.exports = function body(main) {
  return function(state, emit) {
    return html`
      <body class="bg-teal-500 w-screen h-screen">
        ${main(state, emit)}
      </body>
    `;
  };
};
