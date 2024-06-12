import style from './user.module.scss';
const EditUser = () => {
  return (
    <div className={style.user}>
      <h4>Edit Profile</h4>
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
          New password
          <input placeholder="New password" type="text" />
        </label>
        <label htmlFor="">
          Avatar URL
          <input placeholder="Avatar URL" type="text" />
        </label>
      </form>
      <div className={style.user__create}>
        <button className={style.button}>Save</button>
      </div>
    </div>
  );
};
export default EditUser;
