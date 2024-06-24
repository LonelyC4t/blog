/*eslint-disble*/
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

import style from './user.module.scss';
import sendData from './sendData';

const NewUser = () => {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = async (data) => {
    const userData = {
      user: {
        username: data.username,
        email: data.email.toLowerCase(),
        password: data.password,
      },
    };
    const response = await sendData(userData, null, setError);
    if (response && !response.errors) {
      navigate('/sign-in');
    }
  };

  return (
    <div className={style.user}>
      <h4>Create new account</h4>
      {error ? <span className={style.error}>{`${Object.keys(error).join()} - ${error.username}`}</span> : null}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Username
          <input
            placeholder="Username"
            type="text"
            {...register('username', {
              required: 'Обязательно к заполнению',
              minLength: {
                value: 3,
                message: 'Минимум 3 символа',
              },
              maxLength: {
                value: 20,
                message: 'Max 20 символов',
              },
            })}
          />
          <span className={style.error}>{errors?.username && errors.username.message}</span>
        </label>
        <label>
          Email address
          <input
            placeholder="Email adress"
            type="text"
            {...register('email', {
              required: 'Обязательно к заполнению',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Email не очень',
              },
            })}
          />
          <span className={style.error}>{errors?.email && errors.email.message}</span>
        </label>
        <label>
          Password
          <input
            placeholder="Password"
            type="password"
            {...register('password', {
              required: 'Обязательно к заполнению',
              minLength: {
                value: 6,
                message: 'min 6 символов',
              },
              maxLength: {
                value: 40,
                message: 'Max 40 символов',
              },
            })}
          />
          <span className={style.error}>{errors?.password && errors.password.message}</span>
        </label>
        <label>
          Repeat password
          <input
            placeholder="Password"
            type="password"
            {...register('repeatPassword', {
              required: 'Обязательнок заполнению',
              validate: (value) => value === watch('password') || 'Пароли не совпадают',
            })}
          />
          <span className={style.error}>{errors?.repeatPassword && errors.repeatPassword.message}</span>
        </label>
        <div className={style.user__personal}>
          <input
            type="checkbox"
            {...register('agree', {
              required: 'Необходимо согласиться с мутными условиями',
            })}
          />
          <span>I agree to the processing of my personal information</span>
          <p className={style.error}>{errors?.agree && errors.agree.message}</p>
        </div>
        <div className={style.user__create}>
          <button className={style.button} disabled={!isValid} type="submit">
            Create
          </button>
          <p>
            Already have an account?
            <a onClick={() => navigate('/sign-in')} href="#">
              Sign In.
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};
export default NewUser;
