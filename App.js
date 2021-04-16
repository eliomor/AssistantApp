import { StatusBar } from 'expo-status-bar';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import ReduxThunk from 'redux-thunk';

import AppNavigator from './navigation/AppNavigator';
const rootReducer = combineReducers({

});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

/* const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
}; */

export default function App() {
/*   const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  } */
  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
}
