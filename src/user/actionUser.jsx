import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import style from './user.module.scss';
import sendData from './sendData';

const ActionUser = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
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
    if (location.pathname === '/profile') {
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
    }
    if (location.pathname === '/sign-up') {
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
    }
  };

  return (
    <div className={style.user}>
      <h4>{location.pathname === '/profile' ? 'Edit Profile' : 'Create new account'}</h4>
      {error ? <span className={style.error}>{`${Object.keys(error).join()} - ${error.username}`}</span> : null}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Username
          <input
            defaultValue={location.pathname === '/profile' ? user.username : ''}
            placeholder="Username"
            {...register('username', {
              minLength: {
                value: 3,
                message: 'Минимум 3 символа',
              },
              maxLength: {
                value: 20,
                message: 'Максимум 20 символов',
              },
            })}
          />
          <span className={style.error}>{errors?.username && errors.username.message}</span>
        </label>

        <label>
          Email address
          <input
            defaultValue={location.pathname === '/profile' ? user.email : ''}
            placeholder="Email address"
            {...register('email', {
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Email не очень',
              },
            })}
          />
          <span className={style.error}>{errors?.email && errors.email.message}</span>
        </label>

        {location.pathname === '/profile' ? (
          <>
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
                    message: 'Максимум 40 символов',
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
          </>
        ) : (
          <>
            <label>
              Password
              <input
                placeholder="Password"
                type="password"
                {...register('password', {
                  required: 'Обязательно к заполнению',
                  minLength: {
                    value: 6,
                    message: 'Минимум 6 символов',
                  },
                  maxLength: {
                    value: 40,
                    message: 'Максимум 40 символов',
                  },
                })}
              />
              <span className={style.error}>{errors?.password && errors.password.message}</span>
            </label>

            <label>
              Repeat password
              <input
                placeholder="Repeat password"
                type="password"
                {...register('repeatPassword', {
                  required: 'Обязательно к заполнению',
                  validate: (value) => value === watch('password') || 'Пароли не совпадают',
                })}
              />
              <span className={style.error}>{errors?.repeatPassword && errors.repeatPassword.message}</span>
            </label>

            <div className={style.user__personal}>
              <input
                type="checkbox"
                {...register('agree', {
                  required: 'Необходимо согласиться с условиями',
                })}
              />
              <span>I agree to the processing of my personal information</span>
            </div>
            {errors?.agree && <p className={style.error}>{errors.agree.message}</p>}

            <div className={style.user__create}>
              <button className={style.button} disabled={!isValid} type="submit">
                Create
              </button>
              <p>
                Already have an account?{' '}
                <a onClick={() => navigate('/sign-in')} href="#">
                  Sign In.
                </a>
              </p>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default ActionUser;
