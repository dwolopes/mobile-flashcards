import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import { receiveDecks, setDetailDeck } from '../../actions';
import { getDecks } from '../../utils/api';
import { white, darkerBlue } from '../../utils/colors'
import fontPicker from '../../utils/fontPicker'

import Welcome from '../Welcome/Welcome';
import DeckInfo from '../DeckInfo/DeckInfo';

class Deck extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    try {
      getDecks()
        .then((decks) => dispatch(receiveDecks(decks)));
    } catch (error) {
      alert(JSON.stringify(error))
    }
  }

  render() {
    const decks = this.props.decks || {}
    const { dispatch } = this.props

    // if no decks, display welcome message
    if (!Object.keys(decks).length) {
      return (
        <View style={styles.container}>
          <Text style={[styles.header, { color: darkerBlue }]}>Mobile Flashcards</Text>
          <Welcome style={styles.message} navigation={this.props.navigation} />
        </View>
      )
    }

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Mobile Flashcards</Text>
        <Text>Your decks...</Text>
        {Object.keys(decks).map((key) => {
          const animatedValue = new Animated.Value(0)
          return <Animated.View key={decks[key].title} style={{ transform: [{ translateX: animatedValue }] }}>
            <DeckInfo key={decks[key].title} deck={decks[key]}
              newPress={() => dispatch(setDetailDeck(decks[key].title))}
              onPress={() => {
                Animated.sequence([
                  Animated.timing(animatedValue, { duration: 400, toValue: -400 })
                ]).start(() => {
                  dispatch(setDetailDeck(decks[key].title))
                  this.props.navigation.navigate(
                    'DeckDetail',
                    { detailId: decks[key].title }
                  )
                  Animated.sequence([
                    Animated.timing(animatedValue, { duration: 500, toValue: -600 }),
                    Animated.timing(animatedValue, { duration: 100, toValue: 0 })
                  ]).start()
                })
              }
            }
            />
          </Animated.View>
        })}
        <Text style={{ marginBottom: 400 }}></Text>
      </ScrollView>
    );
  }
};


const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    backgroundColor: white,
    alignItems: 'center'
  },
  header: {
    fontFamily: fontPicker(),
    fontSize: 40
  },
  message: {
    fontFamily: fontPicker(),
    fontSize: 30,
    left: -55,
    paddingTop: 16
  }
});

function mapStateToProps(state) {
  return {
    decks: state.decks
  }
}
export default connect(
  mapStateToProps,
)(Deck)