import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Api from '../Api.js';

export default class NewDeckView extends React.Component {

  constructor(props) {
    super(props);

    this.api = new Api();
    this.state = {title: ''};
  }

  createDeck() {
    this.api.createDeck({title: this.state.title})
      .then(() => this.props.navigation.navigate('DeckDetail'));
  }

  render() {
    return <View style={styles.container}>
      <Text>NewDeckView</Text>
      <TextInput
        value={this.state.title}
        onChangeText={text => this.setState({title: text})}
      />
      <Button
        title="Create deck"
        disabled={!this.state.title}
        onPress={() => this.createDeck()}
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
