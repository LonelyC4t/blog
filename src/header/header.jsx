import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import userImg from '../image/user.svg';

import style from './header.module.scss';
import getUser from './data';

const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token && user.username === '') {
      getUser(token, dispatch);
    }
  }, [user.username, token]);
  const logOut = () => {
    localStorage.removeItem('token');
    navigate('sign-in');
  };
  return (
    <header className={style.header}>
      <div className={style.header__wrapper}>
        <p className={style.header__name} onClick={() => navigate('/')}>
          Realworld Blog
        </p>
        <div className={style.header__control}>
          {!token ? (
            <button onClick={() => navigate('sign-in')} className={`${style.button} ${style.header__button_in}`}>
              Sign in
            </button>
          ) : (
            <div className={style.header__user}>
              <button onClick={() => navigate('new-article')}>Create article</button>
              <span onClick={() => navigate('profile')}>{user.username}</span>
              <img onClick={() => navigate('profile')} src={user.avatar ? user.avatar : userImg} alt="user" />
            </div>
          )}

          {!token ? (
            <button onClick={() => navigate('sign-up')} className={`${style.button} ${style.header__button_up}`}>
              Sign UP
            </button>
          ) : (
            <button
              style={{ border: '1px solid gray' }}
              onClick={logOut}
              className={`${style.button} ${style.header__button_up}`}
            >
              Log Out
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
