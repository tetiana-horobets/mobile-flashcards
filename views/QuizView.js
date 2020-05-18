import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux';

class QuizView extends React.Component {

  render() {
    const deck = this.props.decks[this.props.selectedDeck];

    if (!deck.questions.length) {
      return <View style={styles.container}>
        <Text>Sorry, you cannot take a quiz because there are no cards in the deck.</Text>
      </View>;
    }

    return <View style={styles.container}>
      <Text>QuizView</Text>
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
