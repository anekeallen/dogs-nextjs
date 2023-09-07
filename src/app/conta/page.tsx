'use client';
import { redirect } from 'next/navigation';
import React from 'react';

import Feed from '../Components/Feed/Feed';
import { UserContext } from '../UserContext';
import UserHeader from './UserHeader';

const Conta = () => {
  const { data } = React.useContext(UserContext);

  if (data === null) redirect('/');

  return (
    <section className="container">
      <UserHeader />
      <Feed user={data.id} />
    </section>
  );
};

export default Conta;
