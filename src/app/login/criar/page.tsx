'use client'
import React from 'react'
// import { USER_POST } from '../../api';

import { USER_POST } from '../../api';
import useForm from '../../Hooks/useForm';
import Button from '../../Components/Form/Button';
import Input from '../../Components/Form/Input';
import { UserContext } from '../../UserContext';
import useFetch from '../../Hooks/useFetch';
import Error from '../../Components/Helper/Error';
import styles from "./../Login.module.css";

const LoginCreate = () => {

  const username = useForm('');
  const email = useForm('email');
  const password = useForm('');

  const {userLogin} = React.useContext(UserContext);
  // console.log(userLogin);

  const {loading, error, request} = useFetch();

  async function criarUsuario(event: React.FormEvent) {
    event.preventDefault();

    const {url, options} = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value
    })

    const {response} = await request(url,options);

    if (response && response.ok) userLogin(username.value, password.value)

  }
  return (
    <section className={`animeLeft ${styles.login}`}>

      <div className={styles.forms}>
      <h1 className='title'>Cadastre-se</h1>

      <form onSubmit={criarUsuario}>

        <Input type='text' label="Usuário" id='username' name="username" {...username} />
    
        <Input type='email'  label="Email" id='email'  name="email" {...email} />
        <Input type='password' label="Senha" id='password'  name="password" {...password} />

        {loading ? <Button disabled> Cadastrando... </Button> : <Button > Cadastrar </Button>}

        {error && <Error error={error}></Error>}
        

      </form>
      </div>
    </section>
  )
}

export default LoginCreate