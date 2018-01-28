import React from 'react'; // eslint-disable-line
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app.react';
import registerServiceWorker from './../../registerServiceWorker';
// import history from './history';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);

registerServiceWorker();
