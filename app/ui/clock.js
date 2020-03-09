import html from 'choo/html';

export default function clock(state) {
  return html`
    <div class="flex justify-center text-white text-5xl">
      ${state.clock}
    </div>
  `;
}
