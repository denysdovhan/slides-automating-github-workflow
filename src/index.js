import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootEl = document.getElementById('root');

const render = (Component) => {
  ReactDOM.render(<Component />, rootEl);
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => render(App));
}

registerServiceWorker();
