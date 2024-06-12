import style from './user.module.scss';
const SignIn = () => {
  return (
    <div className={style.user}>
      <h4>Sign In</h4>
      <form action="">
        <label htmlFor="">
          Email address
          <input placeholder="Email adress" type="text" />
        </label>
        <label htmlFor="">
          Password
          <input placeholder="Password" type="text" />
        </label>
      </form>
      <div className={style.user__create}>
        <button className={style.button}>Login</button>
        <p>
          Don’t have an account? <a href="">Sign Up.</a>
        </p>
      </div>
    </div>
  );
};
export default SignIn;
