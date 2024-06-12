import { useEffect } from 'react';
//import { useSelector } from 'react-redux';

import data from '../data/data';
import Header from '../header/header';
import Main from '../main/main';
import EditUser from '../user/editUser';
import NewUser from '../user/newUser';
import SignIn from '../user/signIn';

import style from './app.module.scss';

function App() {
  const getData = data();
  useEffect(() => {
    getData();
  }, []);
  //let ar = useSelector((state) => state.articles);
  //console.log(ar);
  return (
    <section className={style.section}>
      <Header />
      <Main />
      <NewUser />
      <SignIn />
      <EditUser />
    </section>
  );
}

export default App;
