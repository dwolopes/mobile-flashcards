import React from 'react';
import { Animated, Easing } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import GeneralTabs from '../GeneralTabs//GeneralTabs'
import { darkBlue, lightBlue, blue, grey, lightGrey, paleBlue, white } from '../../utils/colors';
  
const MainNavigatorRoot = createStackNavigator({
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

const MainNavigator = createAppContainer(MainNavigatorRoot);
export default MainNavigator;