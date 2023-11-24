'use client';
import { redirect } from 'next/navigation';
import React from 'react';
import { useSelector } from 'react-redux';

import Feed from '../Components/Feed/Feed';
import { RootState } from '../store/configureStore';
import UserHeader from './UserHeader';

const Conta = () => {
  const { data } = useSelector((state: RootState) => state.user);

  console.log(data);

  if (data === null) redirect('/');

  return (
    <section className="container">
      <UserHeader />
      <Feed user={data['id']} />
    </section>
  );
};

export default Conta;
