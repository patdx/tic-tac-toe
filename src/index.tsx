/* @refresh reload */
import 'solid-devtools';
import { render } from 'solid-js/web';

import './index.css';
// import 'purecss/build/pure.css';

const root = document.getElementById('root');

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  root!
);
