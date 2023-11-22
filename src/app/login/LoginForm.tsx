'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../Components/Form/Button';
import stylesbtn from '../Components/Form/Button.module.css';
import Input from '../Components/Form/Input';
import Error from '../Components/Helper/Error';
import useForm from '../Hooks/useForm';
import { RootState } from '../store/configureStore';
import { useAppDispatch } from '../store/hooks';
import { userLogin } from '../store/user';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const username = useForm('');
  const password = useForm('');
  const router = useRouter();

  const { data } = useSelector((state: RootState) => state.user);

  const { token, user } = useSelector((state: RootState) => state);

  const loading = token.loading || user.loading;
  const error = token.error || user.error;

  const dispatch = useAppDispatch();
  // console.log(algo);

  // console.log(userLogin);

  useEffect(() => {
    if (data) {
      router.push('/conta');
    }
  }, [router, data]);

  async function handleSubmit(e: React.FormEvent) {
    // console.log("Submit")
    e.preventDefault();

    if (username.validate() && password.validate()) {
      console.log(
        dispatch(
          userLogin({ username: username.value, password: password.value })
        )
      );
    }
  }

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          name="usuario"
          label="Usuário"
          id="usuario"
          type="text"
          {...username}
        />
        <Input
          name="usuario"
          label="Senha"
          id="senha"
          type="password"
          {...password}
        />

        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}

        {error && <Error error={error} />}
      </form>
      <Link className={styles.perdeu} href="/login/perdeu">
        Perdeu a Senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesbtn.button} href="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
