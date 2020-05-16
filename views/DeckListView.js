import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Api from '../Api.js';

export default class DeckListView extends React.Component {

  constructor(props) {
    super(props);

    this.api = new Api();
  }

  componentDidMount() {
    this.api.getDecks().then(data => {
      console.log(data);
    })
  }

  render() {
    return <View style={styles.container}>
      <Text>Hello!</Text>
      <Button
        title="Go to Details"
        onPress={() => this.props.navigation.navigate('DeckDetail')}
      />
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
