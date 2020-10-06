// routes file
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ThemeContext} from 'react-native-elements';
import ListScreen from '../screens/ListScreen';
import AddNoteScreen from '../screens/AddNoteScreen';
import EditNoteScreen from '../screens/EditNoteScreen';
// stack creater
const Stack = createStackNavigator();

// routes function
const Routes = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  // jsx return for routes
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: colors.backgroundColor},
        }}>
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="AddNote" component={AddNoteScreen} />
        <Stack.Screen name="EditNote" component={EditNoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
