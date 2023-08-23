'use client'
import React from 'react'

import styles from './Header.module.css';
// import  Dogs  from 'dogs.svg';

// console.log(Dogs)
import Link from 'next/link';
import Image from 'next/image';
import { UserContext } from '../UserContext';


const Header = () => {

  const {data} = React.useContext(UserContext);

  // console.log(data);
  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`}>

        <Link href='/'>
          <Image src='/dogs.svg' alt='' width={28} height={22} />
          </Link>

          {data ?  <Link className={styles.login} href="/conta">{data.nome}</Link> : 
         <Link className={styles.login} href='/login'>
         Login / Criar
       </Link>
          }
     
        
      </nav>
    </header>
  )
}

export default Header