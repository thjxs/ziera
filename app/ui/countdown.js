import html from 'choo/html';

export default function countdown(state, emit) {
  return html`
    <div class="text-center text-white text-5xl">Goto</div>
    <div class="text-center text-white text-2xl">${state.countdown}</div>
  `;
}
