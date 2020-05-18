import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { connect } from 'react-redux';

class QuizView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showAnswer: false
    };
  }

  showAnswer() {
    this.setState({showAnswer: true});
  }

  showQuestion() {
    this.setState({showAnswer: false});
  }

  render() {
    const deck = this.props.decks[this.props.selectedDeck];

    if (!deck.questions.length) {
      return <View style={styles.container}>
        <Text>Sorry, you cannot take a quiz because there are no cards in the deck.</Text>
      </View>;
    }

    const question = deck.questions[0];

    if (this.state.showAnswer) {
      return <View style={styles.container}>
        <Text>{question.answer}</Text>
        <Button
          title="Show question"
          onPress={() => this.showQuestion()}
        />
      </View>;
    }

    return <View style={styles.container}>
      <Text>{question.question}</Text>
      <Button
        title="Show answer"
        onPress={() => this.showAnswer()}
      />
    </View>;
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
  return {
    decks: state.decks,
    selectedDeck: state.selectedDeck
  };
}

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizView);
