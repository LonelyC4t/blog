import style from './user.module.scss';
const NewUser = () => {
  return (
    <div className={style.user}>
      <h4>Create new account</h4>
      <form action="">
        <label htmlFor="">
          Username
          <input placeholder="Username" type="text" />
        </label>
        <label htmlFor="">
          Email address
          <input placeholder="Email adress" type="text" />
        </label>
        <label htmlFor="">
          Password
          <input placeholder="Password" type="text" />
        </label>
        <label htmlFor="">
          Repeat password
          <input placeholder="Password" type="text" />
        </label>
      </form>
      <div className={style.user__personal}>
        <input type="checkbox" />
        <span>I agree to the processing of my personal information</span>
      </div>
      <div className={style.user__create}>
        <button className={style.button}>Create</button>
        <p>
          Already have an account? <a href="">Sign In.</a>
        </p>
      </div>
    </div>
  );
};
export default NewUser;
