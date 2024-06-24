import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import data from '../data/data';
import Header from '../header/header';
import Main from '../main/main';

import style from './app.module.scss';

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    data(dispatch, 0);
  }, []);
  return (
    <section className={style.section}>
      <Header />
      {location.pathname === '/' ? <Main /> : <Outlet />}
    </section>
  );
}

export default App;
