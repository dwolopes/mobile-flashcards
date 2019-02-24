import React, {Component} from 'react';
import { Animated, Easing } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import Deck from '../Deck/Deck';
import GeneralTabs from '../GeneralTabs//GeneralTabs'
import { darkBlue, lightBlue, blue, grey, lightGrey, paleBlue, white } from '../../utils/colors';
  
const MainNavigator = createStackNavigator({
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

const Teste = createAppContainer(MainNavigator);
export default Teste;