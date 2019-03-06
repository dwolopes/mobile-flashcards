import { RECEIVE_DECKS, ADD_DECK, SET_DETAIL_DECK, ADD_CARD, RESET_DECKS } from '../actions';

export default function decks ( state = {}, action ){
    const {decks} = action;

    switch (action.type) {
        case RECEIVE_DECKS :
            return {
                ...state,
                decks
            };
        
        case ADD_DECK :
            return {
              ...state,
              decks : {
                ...state.decks,
                [action.deck.title] : action.deck
              }
          }
            
        case SET_DETAIL_DECK :
            return {
              ...state,
              detailDeck: action.title
            }
    
        case ADD_CARD:
            return {
                ...state,
                decks: {
                    ...state.decks,
                    [action.deck.title]:{
                        ...action.deck,
                        questions:[
                            ...action.deck.questions,
                            action.card
                        ]
                    }
                }
            }

        case RESET_DECKS:
            return {
                decks: {}
            }
        
        default :
            return state
    }
}

