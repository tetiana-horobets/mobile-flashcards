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
    this.props.navigation.navigate('DeckDetail');
    this.setState({question: '', answer: ''});
  }

  render() {
    return <View style={styles.container}>
      <TextInput
        value={this.state.question}
        onChangeText={text => this.setState({question: text})}
      />
      <TextInput
        value={this.state.answer}
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
});

const mapStateToProps = state => {
  return {selectedDeck: state.selectedDeck}
}

const mapDispatchToProps = {createCard}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCardView);
