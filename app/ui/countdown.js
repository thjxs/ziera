import html from 'choo/html';

export default function countdown(state) {
  return html`
    <div class="relative hover">
      <div id="together" class="absolute">
        <p>${state.together}</p>
      </div>
      <div class="text-center text-white text-5xl">Goto</div>
      <div class="text-center text-white text-2xl">${state.countdown}</div>
    </div>
  `;
}
