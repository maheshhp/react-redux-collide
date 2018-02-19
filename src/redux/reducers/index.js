const defaultState = {
  count: 1,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    default: return state;
  }
};

export default reducer;
