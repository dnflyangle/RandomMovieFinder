import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux';
import AppNavigation from './components/AppNavigation';

const App = () => (
  <Provider store={createStore(reducer)}>
    <AppNavigation />
  </Provider>
);

export default App;
