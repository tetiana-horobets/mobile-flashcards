import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import {createDeck} from '../store/ActionCreators.js';

class NewDeckView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {title: ''};
  }

  createDeck() {
    this.props.createDeck({title: this.state.title});
    this.props.navigation.navigate('DeckDetail');
    this.setState({title: ''});
  }

  render() {
    return <View style={styles.container}>
      <Text style={styles.title}>Create new deck</Text>
      <TextInput style={styles.input}
        value={this.state.title}
        placeholder={'Deck name'}
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
  title: {
    fontSize: 20
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 2,
    margin: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 20,
    alignSelf: 'stretch'
  }
});

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = {createDeck}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewDeckView);
