import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";
import UpdateScreen from "./screens/Updates";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IssLocation" screenOptions={{
        headerShown: false
      }}>

        <Stack.sreen name="Home" component={HomeScreen}/>

        <Stack.sreen name="IssLocation" component={IssLocationScreen}/>

        <Stack.sreen name="Meteors" component={MeteorScreen}/>

        <Stack.sreen name="Updates" component={UpdateScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
