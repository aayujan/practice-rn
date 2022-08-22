import store from './store';

export default function reducer(state =[],action)
{
    console.log('yippe');

    switch (action.type){

        case 'incCount':
            return [...state, {count:state.count+1}];
        case 'decCount':
            return [...state, {count:state.count-1 >=0 ?   state.count-1 : 0  }];
        case 'incCheese':
            return [...state, {cheese:state.cheese+1}];
        case 'decCheese':
            return [...state, {cheese:state.cheese-1 >=0 ?   state.cheese-1 : 0 }];
        case 'incPatty':
            return [...state, {patty:state.patty+1}];
        case 'decPatty':
            return [...state, {patty:patty.cheese-1 >=0 ?   state.patty-1 : 0  }];
        case 'incVeggie':
            return [...state, {veggies:state.veggies+1}];
        case 'decVeggie':
            return [...state, {veggies:veggies.cheese-1 >=0 ?   state.veggies-1 : 0  }];
        case 'showData':
            return [...state];
        default:
            return state;

    }
}
