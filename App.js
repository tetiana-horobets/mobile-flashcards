import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import HomeView from './views/HomeView.js';
import NewDeckView from './views/NewDeckView.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeView} />
        <Tab.Screen name="NewDeck" component={NewDeckView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
