const initialState = {
  articles: [],
  page: 0,
  user: {
    username: '',
    email: '',
    avatar: '',
  },
  spin: false,
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'load':
      return { ...state, articles: action.payload };
    case 'user':
      return { ...state, user: { ...action.payload } };
    case 'page':
      return { ...state, page: action.payload };
    case 'spin':
      return { ...state, spin: action.payload };

    default:
      return { ...state };
  }
};
