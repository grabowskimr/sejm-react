import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { history } from './stores/AppStore';

import store from './stores/AppStore';
import App from './components/App';

ReactDOM.render(<Provider store={store}>
    <ConnectedRouter history={history}>
        <App />
    </ConnectedRouter>
</Provider>, document.querySelector('#root'));