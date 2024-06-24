import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { store } from '../src/data/store';

import './index.css';
//import App from '../src/app/App';
import SignIn from './user/signIn';
import NewUser from './user/newUser';
import App from './app/App';
import OpenArticle from './main/articleList/article/openArticle';
import EditUser from './user/editUser';
import MyArticle from './main/articleList/myArticle/myArticle';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'sign-in',
        element: <SignIn />,
      },
      {
        path: 'sign-up',
        element: <NewUser />,
      },
      {
        path: 'profile',
        element: <EditUser />,
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
