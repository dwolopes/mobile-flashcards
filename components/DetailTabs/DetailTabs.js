import React from 'react';
import { FontAwesome } from '@expo/vector-icons'
import {createBottomTabNavigator} from 'react-navigation';

import DeckDetail from '../DeckDetail/DeckDetail';
import Quiz from '../Quiz/Quiz';
import AddCard from '../AddCard/AddCard';
import { darkBlue, lightBlue, blue, grey, lightGrey, paleBlue, white } from '../../utils/colors';


const DetailTabs = createBottomTabNavigator({
    DeckDetail: {
      screen: DeckDetail,
      navigationOptions: {
        tabBarLabel: 'DeckDetail',
        tabBarIcon: ({ tintColor }) => <FontAwesome name='info' size={30} color={tintColor} />
      },
    },
    Quiz: {
      screen: Quiz,
      navigationOptions: {
        tabBarLabel: 'Start Quiz',
        tabBarIcon: ({ tintColor }) => <FontAwesome name='question-circle' size={40} color={tintColor} />
      },
    },
    AddCard: {
      screen: AddCard,
      navigationOptions: {
        tabBarLabel: 'Add Card',
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
})

export default DetailTabs;