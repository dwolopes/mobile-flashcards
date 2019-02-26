import React from 'react';
import { FontAwesome } from '@expo/vector-icons'
import {createBottomTabNavigator} from 'react-navigation';

import AddDeck from '../AddDeck/AddDeck';
import Deck from '../Deck/Deck';
import { darkBlue, lightBlue, blue, grey, lightGrey, paleBlue, white } from '../../utils/colors';

const GeneralTabs = createBottomTabNavigator({
    Deck: {
      screen: Deck,
      navigationOptions: {
        tabBarLabel: 'Deck',
        tabBarIcon: ({ tintColor }) => <FontAwesome name='list' size={30} color={tintColor} />
      },
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: 'Add Deck',
        tabBarIcon: ({ tintColor }) => <FontAwesome name='plus' size={30} color={tintColor} />
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

export default GeneralTabs;

