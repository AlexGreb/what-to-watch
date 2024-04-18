import React from 'react';
import {useDispatch} from 'react-redux';
import {Operations} from '../../store/user/userReducer';
import {useForm} from 'react-hook-form';
import Header from '../header/header.jsx';

const SignIn = () => {
  const headerTitle = <h1 className="page-title user-page__title">Sign in</h1>;
  const {register, handleSubmit, formState: {errors}} = useForm({
    mode: `all`,
    reValidateMode: `onChange`
  });
  const dispatch = useDispatch();

  const submitUserDataHandler = (formData) => {
    dispatch(Operations.fetchUser({
      ...formData
    }));
  };

  return (
    <div className="user-page">
      <Header title={headerTitle} addClass={`user-page__head`}></Header>
      <div className="sign-in user-page__content">
        <form action="/login" className="sign-in__form" onSubmit={handleSubmit(submitUserDataHandler)}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className={`sign-in__input${errors.email != null ? ` invalid` : ``}`} {...register(`email`, {required: true, pattern: /^\S+@\S+$/i})} type="email" placeholder="Email address" name="email" id="user-email" required />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className={`sign-in__input${errors.password != null ? ` invalid` : ``}`} {...register(`password`, {required: true})} type="password" placeholder="Password" name="password" id="user-password" required />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

export default SignIn;
