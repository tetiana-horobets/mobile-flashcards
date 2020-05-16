import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DeckListView from './views/DeckListView.js';
import DeckDetailView from './views/DeckDetailView.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={DeckListView}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="DeckDetail" component={DeckDetailView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
