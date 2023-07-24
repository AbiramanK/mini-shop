import 'react-native-gesture-handler';
import React from 'react';
import Toast from 'react-native-toast-message';

import RootNavigation from './src/navigation/RootNavigation';

function App() {
  return (
    <>
      <RootNavigation />
      <Toast />
    </>
  );
}

export default App;
