import React, {Component} from 'react';
import { View, Animated, Easing, StatusBar, StyleSheet, Text } from 'react-native';
import { Constants } from 'expo';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import { FontAwesome } from '@expo/vector-icons'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

import MainNavigator from './components/MainNavigator/MainNavigator';
import { darkBlue, lightBlue, blue, grey, lightGrey, paleBlue, white } from './utils/colors';
import { setLocalNotification } from './utils/notifications'
import { initApp, setDefaultDecks } from './utils/api';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
class App extends Component {

  componentDidMount () {
    setDefaultDecks();
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <View style={{backgroundColor: paleBlue, height: Constants.statusBarHeight }}>
            <StatusBar translucent backgroundColor={paleBlue} />
          </View>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

export default App;
