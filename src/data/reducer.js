const initialState = {
  articles: [],
  user: {
    username: '',
    email: '',
    avatar: '',
  },
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'load':
      return { ...state, articles: action.payload };
    case 'user':
      return { ...state, user: { ...action.payload } };

    default:
      return { ...state };
  }
};
