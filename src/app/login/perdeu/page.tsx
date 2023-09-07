'use client';
// import { Link } from 'react-router-dom'
// import { PASSWORD_LOST } from '../../api'
import Link from 'next/link';
import React from 'react';

import Button from '../../Components/Form/Button';
import Input from '../../Components/Form/Input';
import Error from '../../Components/Helper/Error';
import useFetch from '../../Hooks/useFetch';
import useForm from '../../Hooks/useForm';
import styles from './../Login.module.css';

const LoginPasswordLost = () => {
  const login = useForm('');

  const { data, error, loading } = useFetch();

  // console.log(aaa);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    // window.alert("oiiii");

    // if (login.validate()) {

    //   const { url, options } = PASSWORD_LOST(
    //     {
    //       login: login.value,
    //       url: window.location.href.replace('perdeu', 'resetar')
    //     });
    //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
    //   const { json } = await request(url, options);

    // }
  }

  return (
    <section className={`${styles.login}`}>
      <div className={styles.forms}>
        <h1 className="title">Perdeu a senha?</h1>
        {data ? (
          <p>{data.photo.id}</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <Input
              label="Email / Usuário"
              type="text"
              name="login"
              {...login}
            />
            {loading ? (
              <Button disabled>Enviando... </Button>
            ) : (
              <Button>Enviar email </Button>
            )}
          </form>
        )}

        {error && <Error error={error}></Error>}
        <Link href="/login/resetar">Resetar</Link>
      </div>
    </section>
  );
};

export default LoginPasswordLost;
