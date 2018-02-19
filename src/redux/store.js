import { createStore } from 'redux';

const initStore = (reducer) => {
  const store = createStore(reducer);
  return store;
};

export default initStore;
