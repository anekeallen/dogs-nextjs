'use client';

import React from 'react';

// import { Navigate, Route, Routes } from 'react-router-dom';
// import Error404 from '../Error404';
// import LoginCreate from './criar/page';
import styles from './Login.module.css';
import LoginForm from './LoginForm';
// import LoginPasswordLost from './perdeu/page';
// import LoginPasswordReset from './resetar/page';
// import { UserContext } from '../UserContext';

const Login = () => {
  // console.log(login);

  // if (login) return <Navigate to={"/conta"}></Navigate>

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
