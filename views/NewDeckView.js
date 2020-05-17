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

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = {createDeck}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewDeckView);
