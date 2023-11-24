'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../store/configureStore';
import styles from './Header.module.css';
// import  Dogs  from 'dogs.svg';

// console.log(Dogs)

const Header = () => {
  const { data } = useSelector((state: RootState) => state.user);

  // console.log(data);
  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <Link href="/">
          <Image src="/dogs.svg" alt="" width={28} height={22} />
        </Link>

        {data ? (
          <Link className={styles.login} href="/conta">
            {data['nome']}
          </Link>
        ) : (
          <Link className={styles.login} href="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
