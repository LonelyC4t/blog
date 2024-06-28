import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import data from '../data/data';
import Header from '../header/header';
import getUser from '../header/data';

import style from './app.module.scss';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    data(dispatch, 0);
    getUser(dispatch);
  }, []);
  return (
    <section className={style.section}>
      <Header />
      <Outlet />
    </section>
  );
}

export default App;
