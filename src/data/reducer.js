const initialState = {
  articles: [],
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'load':
      return { ...state, articles: action.payload };

    default:
      return { ...state };
  }
};
