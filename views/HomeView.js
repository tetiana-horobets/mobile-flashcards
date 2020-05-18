import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DeckListView from './DeckListView.js';
import DeckDetailView from './DeckDetailView.js';
import NewCardView from './NewCardView.js';
import QuizView from './QuizView.js';

const Stack = createStackNavigator();

export default class HomeView extends React.Component {
  render() {
    return <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={DeckListView}
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen name="DeckDetail" component={DeckDetailView} />
      <Stack.Screen name="NewCard" component={NewCardView} />
      <Stack.Screen name="Quiz" component={QuizView} />
    </Stack.Navigator>
  }
}
