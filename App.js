import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { darkBlue, lightBlue, blue, grey, lightGrey, paleBlue, white } from './utils/color'

import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={{backgroundColor: paleBlue }}>
              <Text>Welcome Douglas</Text>
          </View>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

function mapStateToProps ({decks}) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(App)
