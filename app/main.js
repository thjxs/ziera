import choo from 'choo';
import routes from './routes';
import './main.css';

var app = choo({ hash: true });
routes(app);
app.mount('body');
