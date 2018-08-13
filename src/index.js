import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store/index'
import AppRoutes from './routes';

ReactDOM.render(
<Provider store={store}>
  <AppRoutes />
</Provider>, document.getElementById('root'));
registerServiceWorker();