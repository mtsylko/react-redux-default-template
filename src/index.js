import React from 'react';
import ReactDOM from 'react-dom'
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { register as registerServiceWorker } from "./serviceWorker";
import { BrowserRouter as Router } from 'react-router-dom'
import App from './container/App'
import { Provider } from 'react-redux'
import { configureStore } from './redux'
import initialSate from './redux/initialState'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
//import '../node_modules/bootstrap/scss/bootstrap.scss';

const store = configureStore(initialSate);
ReactDOM.render((
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();