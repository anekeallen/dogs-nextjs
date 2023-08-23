'use client'

import React, { useContext } from 'react'
// import { Navigate, Route, Routes } from 'react-router-dom';
// import Error404 from '../Error404';
import LoginCreate from './criar/page';
import LoginForm from './LoginForm';
import LoginPasswordLost from './perdeu/page';
import LoginPasswordReset from './resetar/page';
import { UserContext } from '../UserContext';
import styles from "./Login.module.css";

const Login = () => {

  const { login } = useContext(UserContext);

  // console.log(login);

  // if (login) return <Navigate to={"/conta"}></Navigate>

  return (
    <section className={styles.login}>

      <div className={styles.forms}>

      <LoginForm />
        {/* <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='/criar' element={<LoginCreate />} />
          <Route path='/perdeu' element={<LoginPasswordLost />} />
          <Route path='/resetar' element={<LoginPasswordReset />} />
          <Route path='/*' element={<Error404 />} />
        </Routes> */}
      </div>
    </section>
  )
}

export default Login