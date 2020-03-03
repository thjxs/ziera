import layouts from './ui/layouts';
import mainView from './ui/mainView';
import hi from './ui/hi';

export default function(app) {
  app.route('/', layouts(mainView));
  app.route('/hi', layouts(hi));
}
