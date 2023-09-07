import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';

// import { NavLink, useLocation } from 'react-router-dom'
import PostarFoto from '../assets/adicionar.svg';
import Estatisticas from '../assets/estatisticas.svg';
import MinhasFotos from '../assets/feed.svg';
import Sair from '../assets/sair.svg';
import useMedia from '../Hooks/useMedia';
import { UserContext } from '../UserContext';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  // const [mobile, setMobile] = useState(null);

  const mobile = useMedia('(max-width: 40rem)');

  const [mobileMenu, setMobileMenu] = useState(false);

  const pathname = usePathname();
  // const router = useRouter();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  // console.log(matches);
  return (
    <>
      {mobile && (
        <button
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <Link href={'/conta'} className={pathname == '/conta' ? 'active' : ''}>
          {' '}
          <MinhasFotos />
          {mobile && 'Feed'}
        </Link>
        <Link
          href={'/conta/estatisticas'}
          className={pathname == '/conta/estatisticas' ? 'active' : ''}
        >
          {' '}
          <Estatisticas />
          {mobile && 'Estatísticas'}
        </Link>
        <Link
          href={'/conta/postar'}
          className={pathname == '/conta/postar' ? 'active' : ''}
        >
          {' '}
          <PostarFoto />
          {mobile && 'Postar Foto'}{' '}
        </Link>
        <button onClick={userLogout}>
          <Sair />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
