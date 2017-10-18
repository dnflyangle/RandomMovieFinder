import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './redux';
import AppNavigation from './components/AppNavigation';

const App = () => {
  const store = createStore(reducer, {}, applyMiddleware(reduxThunk));
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
