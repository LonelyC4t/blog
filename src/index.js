import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { store } from '../src/data/store';

import './index.css';
import SignIn from './user/signIn';
import App from './app/App';
import OpenArticle from './main/articleList/article/openArticle';
import ActionUser from './user/actionUser';
import MyArticle from './main/articleList/myArticle/myArticle';
import Main from './main/main';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: 'sign-in',
        element: <SignIn />,
      },
      {
        path: 'sign-up',
        element: <ActionUser />,
      },
      {
        path: 'profile',
        element: <ActionUser />,
      },
      {
        path: 'article/:id',
        element: <OpenArticle />,
      },
      {
        path: 'new-article',
        element: <MyArticle />,
      },
      {
        path: 'articles/:id/edit',
        element: <MyArticle />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
