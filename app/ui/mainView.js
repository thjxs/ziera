import html from 'choo/html';

export default function mainView(state, emit) {
  function show() {
    let visible = state.visible;
    emit('visible', !visible);
  }
  return html`
    <h1>main view</h1>
    <a hidden="${state.visible}" href="#hi">hi</a>
    <svg class="h-8 w-8 text-white dark:text-grey-90">
      <use xlink:href="/logo.svg#icon" />
    </svg>
    <button onclick="${show}">click</button>
  `;
}
