import React from 'react';
import ReactDOM from 'react-dom'
import { register as registerServiceWorker } from "./serviceWorker";
import { BrowserRouter as Router } from 'react-router-dom'
import App from './container/App'
import { Provider } from 'react-redux'
import { configureStore } from './redux'
import initialSate from './redux/initialState'
import './index.scss'

const store = configureStore(initialSate);

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();