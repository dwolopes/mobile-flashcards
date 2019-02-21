import React, {Component} from 'react';
import { View, Animated, Easing, StatusBar, StyleSheet, Text } from 'react-native';
import { Constants } from 'expo';
import { TabNavigator } from "react-navigation";
import { FontAwesome } from '@expo/vector-icons'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

import Deck from './components/Deck/Deck';
import { darkBlue, lightBlue, blue, grey, lightGrey, paleBlue, white } from './utils/colors';


const GeneralTabs = TabNavigator({
  Deck: {
    screen: Deck,
    navigationOptions: {
      tabBarLabel: 'Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='list' size={30} color={tintColor} />
    },
  },
}, {
  tabBarOptions: {
    activeTintColor: lightGrey,
    inactiveTintColor: grey,
    style: {
      height: 56,
      backgroundColor: darkBlue,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
});

const MainNavigator = StackNavigator({
  General: {
    screen: GeneralTabs,
    navigationOptions: {
      headerTintColor: 'rgba(200, 100, 50, 1)',
      headerStyle: {
        backgroundColor: darkBlue
      }
    }
  },
}, {
  transitionConfig : () => ({
  	transitionSpec: {
  		duration: 0,
  		timing: Animated.timing,
  		easing: Easing.step0,
  	},
  })
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
            <View style={{backgroundColor: paleBlue, height: Constants.statusBarHeight }}>
                <Text>Welcome Douglas</Text>
            </View>
            <MainNavigator />
        </View>
      </Provider>
    );
  }
}

export default App;
