import html from 'choo/html';

export default function hi(state, emit) {
  return html`
    <h1>hi view</h1>
    <a href="/">main</a>
  `;
}
