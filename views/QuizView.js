import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { connect } from 'react-redux';

class QuizView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showAnswer: false,
      totalAnswers: 0,
      correctAnswers: 0
    };
  }

  showAnswer() {
    this.setState({showAnswer: true});
  }

  showQuestion() {
    this.setState({showAnswer: false});
  }

  restartQuiz() {
    this.setState({totalAnswers: 0, correctAnswers: 0});
  }

  saveAnswer(isCorrect) {
    if (isCorrect) {
      this.setState({
        correctAnswers: this.state.correctAnswers + 1,
        totalAnswers: this.state.totalAnswers + 1
      });
    } else {
      this.setState({
        totalAnswers: this.state.totalAnswers + 1
      });
    }
  }

  renderQuestionAnswer(question) {
    if (this.state.showAnswer) {
      return <View>
        <Text>{question.answer}</Text>
        <Button
          title="Show question"
          onPress={() => this.showQuestion()}
        />
      </View>;
    }

    return <View>
      <Text>{question.question}</Text>
      <Button
        title="Show answer"
        onPress={() => this.showAnswer()}
      />
    </View>;
  }

  render() {
    const deck = this.props.decks[this.props.selectedDeck];

    if (!deck.questions.length) {
      return <View style={styles.container}>
        <Text>Sorry, you cannot take a quiz because there are no cards in the deck.</Text>
      </View>;
    }

    if (deck.questions.length === this.state.totalAnswers) {
      return <View style={styles.container}>
        <Text>The quiz has been completed.</Text>
        <Text>You answered correctly {this.state.correctAnswers} times out of {this.state.totalAnswers} questions.</Text>
        <Button
          title="Restart quiz"
          onPress={() => this.restartQuiz()}
        />
        <Button
          title="End quiz"
          onPress={() => this.props.navigation.navigate('Deck details')}
        />
      </View>;
    }

    const question = deck.questions[this.state.totalAnswers];

    return <View style={styles.container}>
      {this.renderQuestionAnswer(question)}
      <Button
        title="Correct"
        onPress={() => this.saveAnswer(true)}
      />
      <Button
        title="Incorrect"
        onPress={() => this.saveAnswer(false)}
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
