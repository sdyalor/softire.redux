/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
import {
  createStore,
  compose as origCompose,
  applyMiddleware,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import { lazyReducerEnhancer } from 'pwa-helpers/lazy-reducer-enhancer.js';

const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || origCompose;

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text]);
    default:
      return state;
  }
}

/* this is a function type state -> action -> state */
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

export const store = createStore(
  combineReducers({ renamed1: todos, renamed2: counter }),
  //  todos,
  //  ['this is the initial state'],
  { renamed1: ['xd from renamed'], renamed2: 100 },
  compose(
    lazyReducerEnhancer(combineReducers),
    applyMiddleware(thunk)
  )
);
