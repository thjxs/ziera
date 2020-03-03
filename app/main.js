import './main.css'
var html = require('choo/html')
var choo = require('choo')

var app = choo({hash: true})
app.route('/', mainView)
app.route('/hi', ma)
app.mount('body')

function mainView(state, emit) {
  return html`<body>
      <h1>hello</h1>
      <a href='#hi'>ma</a>
    </body>
  `
}

function ma() {
  return html`<body>bebe<a href='/'>ff</a></body>`
}