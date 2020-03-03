import html from 'choo/html';

export default function mainView(state, emit) {
  return html`
    <h1>main view</h1>
    <a href="#hi">hi</a>
  `;
}
