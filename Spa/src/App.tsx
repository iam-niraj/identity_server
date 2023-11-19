import {hot} from 'react-hot-loader/root';
import * as React from 'react';
import {FunctionComponent, ReactElement} from 'react';
import Routes from './Routes';
import {Provider} from 'react-redux';
import {history} from './configureStore';
import {ConnectedRouter} from 'connected-react-router';
import 'spectre.css/dist/spectre.min.css';
import store from './configureStore';

const mystore = store;

const App: FunctionComponent<{}> = (): ReactElement => (
  <Provider store={mystore}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
);

export default hot(App);
