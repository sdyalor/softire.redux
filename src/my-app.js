/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
import { LitElement, html } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from './store.js';

store.dispatch({
  type: 'ADD_TODO',
  text: 'Read the docs',
});
store.dispatch({
  type: 'ADD_TODO',
  text: 'Read the docs2',
});
store.dispatch(dispatch =>
  setTimeout(() => dispatch({ type: 'ADD_TODO', text: 'This is async' }), 4000)
);
console.log(store.getState());

store.dispatch({
  type: 'INCREMENT',
});

function recounter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT2':
      return state + 1;
    case 'DECREMENT2':
      return state - 1;
    default:
      return state;
  }
}

store.addReducers({ lazyreducer: recounter });

class MyApp extends connect(store)(LitElement) {
  //  constructor() {}

  render() {
    return html`
      <h1>hello its me</h1>
    `;
  }
}
customElements.define('my-app', MyApp);
