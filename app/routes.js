import layouts from './ui/layouts';
import mainView from './ui/mainView';

export default function(app) {
  app.route('/', layouts(mainView));
}
