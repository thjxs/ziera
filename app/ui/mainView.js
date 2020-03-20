import html from 'choo/html';
import clock from './clock';
import countdown from './countdown';

export default function mainView(state, emit) {
  return html`
    ${clock(state, emit)} ${countdown(state, emit)}
  `;
}
