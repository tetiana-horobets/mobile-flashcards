import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { connect } from 'react-redux';
import {clearNotification, scheduleNotification} from '../Notification.js';

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
    const deck = this.props.decks[this.props.selectedDeck];

    if (deck.questions.length - 1 === this.state.totalAnswers) {
      clearNotification()
        .then(() => scheduleNotification());
    }

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
        <Text style={styles.questionAnswer}>{question.answer}</Text>
        <View style={styles.questionAnswerButton}>
          <Button
            title="Show question"
            onPress={() => this.showQuestion()}
          />
        </View>
      </View>;
    }

    return <View>
      <Text style={styles.questionAnswer}>{question.question}</Text>
      <View style={styles.questionAnswerButton}>
        <Button
          title="Show answer"
          onPress={() => this.showAnswer()}
        />
      </View>
    </View>;
  }

  render() {
    const deck = this.props.decks[this.props.selectedDeck];

    if (!deck.questions.length) {
      return <View style={styles.container}>
        <Text style={styles.alert}>Sorry, you cannot take a quiz because there are no cards in the deck.</Text>
      </View>;
    }

    if (deck.questions.length === this.state.totalAnswers) {
      return <View style={styles.container}>
        <Text>The quiz has been completed.</Text>
        <Text>You answered correctly {this.state.correctAnswers} times out of {this.state.totalAnswers} questions.</Text>
        <View style={styles.button}>
          <Button
            title="Restart quiz"
            onPress={() => this.restartQuiz()}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="End quiz"
            onPress={() => this.props.navigation.navigate('Deck details')}
          />
        </View>
      </View>;
    }

    const question = deck.questions[this.state.totalAnswers];

    return <View style={styles.container}>
      <Text>Question {this.state.totalAnswers + 1} out of {deck.questions.length}</Text>
      {this.renderQuestionAnswer(question)}
      <View style={styles.button}>
        <Button
          title="Correct"
          onPress={() => this.saveAnswer(true)}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Incorrect"
          onPress={() => this.saveAnswer(false)}
        />
      </View>
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
  button: {
    marginTop: 10
  },
  alert: {
    width: '80%',
    color: 'red'
  },
  questionAnswer: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'stretch'
  },
  questionAnswerButton: {
    marginTop: 10,
    width: '100%',
    alignSelf: 'center'
  }
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
