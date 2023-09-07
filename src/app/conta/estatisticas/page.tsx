'use client';
import React from 'react';

import UserHeader from '../UserHeader';
import UseStats from '../UseStats';

const estatisticas = () => {
  return (
    <section className="container">
      <UserHeader />
      <UseStats />
    </section>
  );
};

export default estatisticas;
