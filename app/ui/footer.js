import html from 'choo/html';
import Component from 'choo/component';

class Footer extends Component {
  constructor(name, state, emit) {
    super(name);
    this.state = state;
    this.emit = emit;
  }

  update() {
    return false;
  }

  createElement() {
    return html`
      <footer><img class="block ml-auto mr-8" src="gp.png" /></footer>
    `;
  }
}

export default Footer;
