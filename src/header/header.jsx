import style from './header.module.scss';
const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.header__wrapper}>
        <p className={style.header__name}>Realworld Blog </p>
        <div className={style.header__control}>
          <button className={`${style.button} ${style.header__button_in}`}>Sign in</button>
          <button className={`${style.button} ${style.header__button_up}`}>Sign UP</button>
        </div>
      </div>
    </header>
  );
};
export default Header;
