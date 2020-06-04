import html from 'choo/html';
import Footer from './footer';

export default (main) => (state, emit) =>
  html`
    <body class="bg-teal-500 w-screen h-screen">
      ${main(state, emit)} ${state.cache(Footer, 'footer').render()}
    </body>
  `;
