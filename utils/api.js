import { AsyncStorage } from 'react-native';

const STORAGE_KEY = "FLASHCARDS:STORAGE_KEY";

export const initData = {
  React: {
      title: 'React',
      questions: [{
              question: 'What is React?',
              answer: 'A library for managing user interfaces'
          },
          {
              question: 'Where do you make Ajax requests in React?',
              answer: 'The componentDidMount lifecycle event'
          }
      ]
  },
  JavaScript: {
      title: 'JavaScript',
      questions: [{
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }]
  }
}

export const getDecks = () => {
  return AsyncStorage.getItem(STORAGE_KEY)
      .then( results => {
          if(results == null) {
              AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(initData));
              return initData;
          } else {
              return JSON.parse(results);
          }
      });
}

export const deleteDecks = () => {
  return AsyncStorage.removeItem(STORAGE_KEY)
}

export const submitDeck = (deck) => {
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
    [deck.title]: deck
  }))
}

export const submitCard  = (card, deck) => {
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
    [deck.title]: {title: deck.title, questions: [...deck.questions, card]}
  }))
}