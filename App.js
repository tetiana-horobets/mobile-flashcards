import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeView from './views/HomeView.js';
import NewDeckView from './views/NewDeckView.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import store from './store/Store.js';
import { Provider } from 'react-redux';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator tabBarOptions={{
          labelStyle: styles.label,
          tabStyle: styles.tab
        }}>
          <Tab.Screen name="Home" component={HomeView} />
          <Tab.Screen name="New Deck" component={NewDeckView} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
  },
  tab: {
    justifyContent: 'center'
  }
});
