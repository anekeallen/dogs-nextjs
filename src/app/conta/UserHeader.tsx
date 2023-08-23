import React, { useEffect, useState } from 'react';
import UserHeaderNav from './UserHeaderNav';
import styles from './UserHeader.module.css';
// import { useLocation } from 'react-router-dom';
import { useRouter, usePathname  } from 'next/navigation'

const UserHeader = () => {
  const [title, setTitle] = useState('');

  const pathname = usePathname()
  // console.log(pathname)

  // const location = useLocation();

  useEffect(()=> {
    // const {pathname} = router;
    switch (pathname) {
     
      case '/conta/estatisticas':
        setTitle('Estatísticas');
        break;
  
        case '/conta/postar':
          setTitle('Poste Sua Foto');
  
          break;
    
      default:
        setTitle('Minha Conta')
        break;
    }

  },[pathname])

  



  return (
    <header className={styles.header}>
      <h1 className='title'>{title}</h1>

      <UserHeaderNav />
    </header>
  )
}

export default UserHeader