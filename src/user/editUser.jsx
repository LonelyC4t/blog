import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import style from './user.module.scss';
import sendData from './sendData';

const EditUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
  });
  const user = useSelector((state) => state.user);
  const onSubmit = (data) => {
    const userData = {
      user: {
        username: data.username,
        email: data.email.toLowerCase(),
        password: data.password,
        image: data.avatar,
      },
    };
    sendData(userData, dispatch);
    navigate('/');
  };
  return (
    <div className={style.user}>
      <h4>Edit Profile</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Username
          <input
            defaultValue={user.username}
            placeholder="Username"
            {...register('username', {
              minLength: {
                value: 3,
                message: 'Минимум 3 символа',
              },
              maxLength: {
                value: 20,
                message: 'Maкимум 20 символов',
              },
            })}
          />
          <span className={style.error}>{errors?.username && errors.username.message}</span>
        </label>
        <label>
          Email address
          <input
            defaultValue={user.email}
            placeholder="Email adress"
            {...register('email', {
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Email не очень',
              },
            })}
          />
          <span className={style.error}>{errors?.email && errors.email.message}</span>
        </label>
        <label>
          New password
          <input
            placeholder="New password"
            type="password"
            {...register('password', {
              required: 'Необходимо заполнить поле',
              minLength: {
                value: 6,
                message: 'Минимум 6 символов',
              },
              maxLength: {
                value: 40,
                message: 'Минимум 40 символов',
              },
            })}
          />
          <span className={style.error}>{errors?.password && errors.password.message}</span>
        </label>
        <label>
          Avatar URL
          <input defaultValue={user.avatar} placeholder="Avatar URL" {...register('avatar')} />
        </label>
        <div className={style.user__create}>
          <button disabled={!isValid} style={{ margin: '10px' }} className={style.button}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
export default EditUser;
