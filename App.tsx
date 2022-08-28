import React from 'react';
import {Routes} from './src/routes';
import {StatusBar} from 'react-native';
import {colors} from './src/styles/colors';

const App: React.FunctionComponent = () => {
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={colors.background}
        translucent
      />
      <Routes />
    </>
  );
};

export default App;
