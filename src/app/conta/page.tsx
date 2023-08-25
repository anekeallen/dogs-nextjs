'use client'
import React from 'react'
import { UserContext } from '../UserContext'
import Feed from '../Components/Feed/Feed'
import UserHeader from './UserHeader'
import { redirect } from 'next/navigation';



const Conta = () => {
  const { data } = React.useContext(UserContext);


  if(data === null) redirect('/');
  
  return (
    <section className='container'>
      <UserHeader />
      <Feed user={data.id} />
    </section>
  )
}

export default Conta