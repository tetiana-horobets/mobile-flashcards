import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

class DeckDetailView extends React.Component {
  render() {
    if (!this.props.selectedDeck || !this.props.decks[this.props.selectedDeck]) {
      return <View style={styles.container}>
        <Text>Loading</Text>
      </View>;
    }

    const deck = this.props.decks[this.props.selectedDeck];
    return <View style={styles.container}>
      <Text>{deck.title}</Text>
      <Text>{deck.questions.length} cards</Text>
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
  return {
    decks: state.decks,
    selectedDeck: state.selectedDeck
  };
}

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckDetailView);
