import React, {useContext} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {ThemeContext} from 'react-native-elements';
import Spinner from 'react-native-loading-spinner-overlay';
import Routes from './src/routes/Routes';
import {NoteContext} from './src/context/NoteContext';

const App = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const {
    state: {isLoading},
  } = useContext(NoteContext);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Routes />
      <StatusBar
        backgroundColor={colors.backgroundColor}
        barStyle="dark-content"
      />
      <Spinner visible={isLoading} />
    </SafeAreaView>
  );
};

export default App;
