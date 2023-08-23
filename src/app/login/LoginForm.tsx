'use client'
import React, { useEffect } from 'react'
import useForm from '../Hooks/useForm';
import Button from '../Components/Form/Button';
import Input from '../Components/Form/Input';
import Error from '../Components/Helper/Error';
import styles from  "./LoginForm.module.css";
import stylesbtn from  "../Components/Form/Button.module.css";

import { UserContext } from '../UserContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const LoginForm = () => {
  
  const username = useForm('');
  const password = useForm('');
  const router = useRouter();
  
  const {userLogin, error, loading, login} = React.useContext(UserContext);

  // const usuario = React.useContext(UserContext);
  
  // console.log(userLogin);

  useEffect(() => {
    if(login){
      router.push('/conta');
    }
  
 
  }, [router, login])
  


  async function handleSubmit(e: React.FormEvent) {
    
    // console.log("Submit")
    e.preventDefault();

    // console.log(username)
    // console.log(password.validate())
    // console.log(username.validate())

    if(username.validate() && password.validate()){

      userLogin(username.value, password.value);
   
    }

    
  }

  return (
    <section className='animeLeft'>
   
      <h1 className='title'>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input name="usuario" label="Usuário" id="usuario" type="text" {...username} />
        <Input name="usuario" label="Senha" id="senha" type="password" {...password} />

        {loading ?  <Button disabled>Carregando...</Button> :  <Button >Entrar</Button>}
      
        {error && <Error error={error} />}
    
        
      </form>
      <Link className={styles.perdeu} href="/login/perdeu">Perdeu a Senha?</Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
      <Link className={stylesbtn.button} href="/login/criar">Cadastro</Link>
      </div>
    </section>
  )
}

export default LoginForm