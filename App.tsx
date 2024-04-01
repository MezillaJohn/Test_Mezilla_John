import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/store/store';
import AppStack from './src/navigation/AppStack';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppStack />
          </PersistGate>
        </Provider>
      </NavigationContainer>
    </>
  );
};

export default App;
