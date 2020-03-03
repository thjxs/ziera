import choo from 'choo';
import routes from './routes';
import './main.css';
import store from './store';

var app = choo({ hash: true });
routes(app);
app.use(store);
app.mount('body');
