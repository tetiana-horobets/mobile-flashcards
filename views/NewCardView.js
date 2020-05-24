import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import {createCard} from '../store/ActionCreators.js';

class NewCardView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      question: '',
      answer: ''
    };
  }

  createCard() {
    const card = {
      deckId: this.props.selectedDeck,
      question: this.state.question,
      answer: this.state.answer
    };
    this.props.createCard(card);
    this.props.navigation.navigate('Deck details');
    this.setState({question: '', answer: ''});
  }

  render() {
    return <View style={styles.container}>
      <Text style={styles.title}>Create new card</Text>
      <TextInput
        style={styles.input}
        value={this.state.question}
        placeholder={'Card question'}
        onChangeText={text => this.setState({question: text})}
      />
      <TextInput
        style={styles.input}
        value={this.state.answer}
        placeholder={'Card answer'}
        onChangeText={text => this.setState({answer: text})}
      />
      <Button
        title="Create card"
        disabled={!this.state.question || !this.state.answer}
        onPress={() => this.createCard()}
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
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 20,
    alignSelf: 'stretch'
  }
});

const mapStateToProps = state => {
  return {selectedDeck: state.selectedDeck}
}

const mapDispatchToProps = {createCard}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCardView);
