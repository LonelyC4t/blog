import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import style from './user.module.scss';
import sendData from './sendData';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
  });
  const onSubmit = async (data) => {
    const userData = {
      user: {
        email: data.email.toLowerCase(),
        password: data.password,
      },
    };
    let responce = await sendData(userData, dispatch, setError);
    if (responce && !responce.errors) {
      navigate('/');
    }
  };
  return (
    <div className={style.user}>
      <h4>Sign In</h4>
      {error ? (
        <span className={style.error}> {`${Object.keys(error).join()} - ${error['email or password']}`} </span>
      ) : null}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Email address
          <input
            placeholder="Email adress"
            {...register('email', {
              required: 'Обязательнок заполнению',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Email не очень',
              },
            })}
          />
          <span className={style.error}>{errors?.password ? errors.email?.message : null}</span>
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="Password"
            {...register('password', {
              required: 'Обязательнок заполнению',
            })}
          />
          <span className={style.error}>{errors?.password ? errors.password?.message : null}</span>
        </label>
        <div className={style.user__create}>
          <button className={style.button} disabled={!isValid}>
            Login
          </button>
          <p>
            Don’t have an account?
            <a onClick={() => navigate('/sign-up')} href="#">
              Sign Up.
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};
export default SignIn;
